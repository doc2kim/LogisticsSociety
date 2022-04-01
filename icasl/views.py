from .models import Icasl
from .serializers import IcaslSerializer
from rest_framework import viewsets
from rest_framework.permissions import AllowAny
# Create your views here.



class IcaslView(viewsets.ModelViewSet):
    serializer_class = IcaslSerializer
    queryset = Icasl.objects.all()
    permission_classes = [AllowAny]

# Create your views here.
