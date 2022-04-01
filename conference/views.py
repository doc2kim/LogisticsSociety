from .models import Conference
from .serializers import ConferenceSerializer
from rest_framework import viewsets
from rest_framework.permissions import AllowAny
# Create your views here.



class ConferenceView(viewsets.ModelViewSet):
    serializer_class = ConferenceSerializer
    queryset = Conference.objects.all()
    permission_classes = [AllowAny]

