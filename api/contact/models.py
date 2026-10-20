from django.db import models


class Submission(models.Model):
    """A website enquiry or careers application."""

    KIND_CHOICES = [("enquiry", "Enquiry"), ("career", "Career application")]

    kind = models.CharField(max_length=10, choices=KIND_CHOICES)
    name = models.CharField(max_length=120)
    organisation = models.CharField(max_length=160, blank=True)
    role = models.CharField(max_length=120, blank=True)
    email = models.EmailField()
    interest = models.CharField(max_length=120, blank=True)
    message = models.TextField(max_length=4000)
    consent = models.BooleanField()
    email_sent = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.get_kind_display()} from {self.name} ({self.created_at:%Y-%m-%d})"
