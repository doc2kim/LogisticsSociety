from django.db import models
from django.utils.translation import gettext_lazy as _
from django.utils import timezone
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin

# Create your models here.


class UserManager(BaseUserManager):

    use_in_migrations = True

    def create_user(self, email, organization, password):

        if not email:
            raise ValueError('must have user email')
        if not password:
            raise ValueError('must have user password')

        user = self.model(
            email=self.normalize_email(email),
            password=password,

            organization=organization,
        )
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, organization, password):

        user = self.create_user(
            email=self.normalize_email(email),
            organization=organization,
            password=password,

        )
        user.is_admin = True
        user.is_superuser = True
        user.save(using=self._db)
        return user


class User(AbstractBaseUser, PermissionsMixin):
    #
    objects = UserManager()

    MEMBER_GENERAL = "general"
    MEMBER_STUDENT = "student"
    MEMBER_GROUP_GENERAL = "group_general"
    MEMBER_GROUP_SPACIAL = "group_spacial"

    MEMBER_CHOICES = (
        (MEMBER_GENERAL, "일반"),
        (MEMBER_STUDENT, "학생"),
        (MEMBER_GROUP_GENERAL, "단체 일반"),
        (MEMBER_GROUP_SPACIAL, "단체 특별"),
    )

    email = models.EmailField(
        max_length=150,
        unique=True,
    )
    name = models.CharField(max_length=150)

    affiliated = models.CharField(max_length=30)

    member_method = models.CharField(
        max_length=50, choices=MEMBER_CHOICES, default=MEMBER_GENERAL)

    is_dues = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)

    last_login = models.DateTimeField(_('last login'), blank=True, null=True)
    date_joined = models.DateTimeField(_('date joined'), default=timezone.now)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['affiliated']

    def __str__(self):
        return self.email

    @property
    def is_staff(self):
        return self.is_admin
