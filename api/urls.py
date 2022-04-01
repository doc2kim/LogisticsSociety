from rest_framework_simplejwt.views import (

    TokenRefreshView,
)
from django.urls import path
from . import views
from users.views import UserCreateView, ChangePasswordView, ChangeProfileView
from notice.views import NoticeView, DetailNoticeView
from conference.views import ConferenceView
from icasl.views import IcaslView
from news.views import NewsView, DetailNewsView
from etc.views import FileView
from .views import MyTokenObtainPairView


urlpatterns = [
    path('', views.getRoutes),
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('signup/', UserCreateView.as_view()),
    path('change_password/', ChangePasswordView.as_view()),
    path('change_profile/', ChangeProfileView.as_view()),
    path('notice/', NoticeView.as_view({'get': 'list'})),
    path('notice/<int:pk>/', DetailNoticeView.as_view({'get': 'retrieve'})),
    path('conference/', ConferenceView.as_view({'get':'list'})),
    path('icasl/', IcaslView.as_view({'get':'list'})),
    path('news/', NewsView.as_view({'get': 'list'})),
    path('news/<int:pk>/', DetailNewsView.as_view({'get': 'retrieve'})),
    path('files/', FileView.as_view({'get': 'list'}))
]
