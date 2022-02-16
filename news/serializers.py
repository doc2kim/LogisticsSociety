from .models import News
from rest_framework import serializers


class NewsSerializer(serializers.ModelSerializer):
    image = serializers.CharField(read_only=True)
    cover_image = serializers.CharField(read_only=True)

    class Meta:
        model = News
        fields = '__all__'
