from django.contrib import admin

from .models import Submission


@admin.register(Submission)
class SubmissionAdmin(admin.ModelAdmin):
    list_display = ("created_at", "kind", "name", "organisation", "email", "email_sent")
    list_filter = ("kind", "email_sent")
    search_fields = ("name", "organisation", "email", "message")
    readonly_fields = [f.name for f in Submission._meta.fields]
