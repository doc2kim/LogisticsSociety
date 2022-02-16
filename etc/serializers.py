from .models import File
from rest_framework import serializers


# File model은 ManyToManyField이기 때문데 따로 직렬화 해서 사용해야함
class FileSerializer(serializers.ModelSerializer):

    class Meta:
        model = File
        fields = '__all__'
