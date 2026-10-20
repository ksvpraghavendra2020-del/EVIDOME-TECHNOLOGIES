from django.urls import path

from .views import SubmissionView

urlpatterns = [path("submissions/", SubmissionView.as_view())]
