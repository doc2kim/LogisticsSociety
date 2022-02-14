from .models import User
from rest_framework import status
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.response import Response
from rest_framework import generics
from .serializers import UserSerializer, ChangePasswordSerializer, ChangeProfileSerializer


class UserCreateView(generics.CreateAPIView):

    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

    def create(self, request, *args, **kwargs):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            self.perform_create(serializer)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ChangePasswordView(generics.UpdateAPIView):

    queryset = User.objects.all()
    serializer_class = ChangePasswordSerializer

    def get_object(self, queryset=None):

        return self.request.user  # view가 표시하고 있는(로그인 유저 데이터) object를 반환

    def update(self, request, *args, **kwargs):
        self.object = self.get_object()  # view가 표시하고 있는(로그인 유저 데이터) object를 가져와 저장
        serializer = self.get_serializer(
            data=request.data)  # 유효성 검사에 사용해야 하는 serializer instance를 반환하고 입력을 직렬화 해제하고 출력을 직렬화한다.

        if serializer.is_valid():  # serializer의  input값의 유효성 검사.
            # Check old password
            # view가 표시하고 있는(로그인 유저의 데이터)와 input값 not 비교
            if not self.object.check_password(serializer.data.get("old_password")):
                return Response({"old_password": ["Wrong password."]}, status=status.HTTP_400_BAD_REQUEST)
            # set_password also hashes the password that the user will get
            # 새로운 패스워드를 암호화한다.
            self.object.set_password(serializer.data.get("new_password"))
            self.object.save()
            response = {
                'status': 'success',
                'code': status.HTTP_200_OK,
                'message': 'Password updated successfully',
                'data': []
            }
            return Response(response)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ChangeProfileView(generics.UpdateAPIView):

    queryset = User.objects.all()
    serializer_class = ChangeProfileSerializer

    def get_object(self, queryset=None):

        return self.request.user

    def update(self, request, *args, **kwargs):
        self.object = self.get_object()
        serializer = self.get_serializer(data=request.data)

        if serializer.is_valid():
            self.object.name = serializer.data.get("name")
            self.object.organization = serializer.data.get("affiliated")
            self.object.member_method = serializer.data.get("member_method")
            self.object.save()
            response = {
                'status': 'success',
                'code': status.HTTP_200_OK,
                'message': 'Profile updated successfully',
                'data': []
            }
            return Response(response)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
