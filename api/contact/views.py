import logging
from html import escape

from django.conf import settings
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from .serializers import SubmissionSerializer

log = logging.getLogger(__name__)


def send_notification(sub) -> bool:
    """Email the submission via Resend. Returns False (never raises) if not configured."""
    if not (settings.RESEND_API_KEY and settings.MAIL_TO):
        log.warning("Resend not configured; submission %s stored only.", sub.pk)
        return False
    try:
        import resend

        resend.api_key = settings.RESEND_API_KEY
        rows = [("Type", sub.get_kind_display()), ("Name", sub.name), ("Organisation", sub.organisation),
                ("Role", sub.role), ("Email", sub.email), ("Interest", sub.interest), ("Message", sub.message)]
        html = "".join(f"<p><strong>{k}:</strong> {escape(v)}</p>" for k, v in rows if v)
        resend.Emails.send({
            "from": settings.MAIL_FROM,
            "to": [settings.MAIL_TO],
            "reply_to": sub.email,
            "subject": f"[Evidome] {sub.get_kind_display()} from {sub.name}",
            "html": html,
        })
        return True
    except Exception:  # noqa: BLE001 - email failure must not lose the submission
        log.exception("Resend delivery failed for submission %s", sub.pk)
        return False


class SubmissionView(APIView):
    authentication_classes: list = []
    permission_classes: list = []

    def post(self, request):
        data = request.data
        # Honeypot tripped: pretend success so bots learn nothing.
        if data.get("website"):
            return Response({"ok": True}, status=status.HTTP_201_CREATED)
        ser = SubmissionSerializer(data=data)
        if not ser.is_valid():
            return Response({"ok": False, "errors": ser.errors}, status=status.HTTP_400_BAD_REQUEST)
        sub = ser.save()
        if send_notification(sub):
            sub.email_sent = True
            sub.save(update_fields=["email_sent"])
        return Response({"ok": True}, status=status.HTTP_201_CREATED)
