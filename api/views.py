from django.http import JsonResponse
from rest_framework.response import Response

from rest_framework.decorators import api_view  # 함수형 뷰 데코레이터
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['email'] = user.email
        token['name'] = user.name
        token['affiliated'] = user.affiliated
        token['member_method'] = user.member_method
        return token


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


@api_view(['GET, POST'])
def getRoutes(request):
    routes = [  # 토큰을 생성하고 갱신하는 경로 지정
        '/api/token',
        '/api/token/refresh',
        '/api/signup',
    ]
    return Response(routes)
