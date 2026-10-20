from rest_framework import serializers

from .models import Submission


class SubmissionSerializer(serializers.ModelSerializer):
    # Honeypot: real users never see or fill this field.
    website = serializers.CharField(required=False, allow_blank=True, write_only=True)
    consent = serializers.BooleanField()

    class Meta:
        model = Submission
        fields = ["kind", "name", "organisation", "role", "email", "interest", "message", "consent", "website"]

    def validate_consent(self, value):
        if not value:
            raise serializers.ValidationError("Consent is required.")
        return value

    def validate_message(self, value):
        if len(value.strip()) < 10:
            raise serializers.ValidationError("Please provide a little more detail.")
        return value

    def create(self, validated_data):
        validated_data.pop("website", None)
        return super().create(validated_data)
