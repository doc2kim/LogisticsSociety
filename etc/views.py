from .models import File
from .serializers import FileSerializer
from rest_framework import viewsets
from rest_framework.permissions import AllowAny

# Create your views here.


class FileView(viewsets.ModelViewSet):
    serializer_class = FileSerializer
    queryset = File.objects.all()
    permission_classes = [AllowAny]
