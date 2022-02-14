from .models import User
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    tokens = serializers.SerializerMethodField()

    def get_tokens(self, user):
        tokens = RefreshToken.for_user(user)
        refresh = str(tokens)
        access = str(tokens.access_token)
        data = {
            "refresh": refresh,
            "access": access
        }
        return data

    def create(self, validated_data):
        user = User.objects.create_user(
            email=validated_data['email'],
            name=validated_data['name'],
            organization=validated_data['organization'],
            member_method=validated_data['member_method'],
            password=validated_data['password']
        )
        return user

    class Meta:
        model = User
        fields = ['id', 'name', 'email', 'password',
                  'member_method', 'organization', 'tokens']


class ChangePasswordSerializer(serializers.Serializer):

    model = User

    old_password = serializers.CharField(required=True)
    new_password = serializers.CharField(required=True)


class ChangeProfileSerializer(serializers.Serializer):

    model = User

    name = serializers.CharField(required=True)
    affiliated = serializers.CharField(required=True)
    member_method = serializers.CharField(required=True)
