from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path("", TemplateView.as_view(template_name='frontend/build/index.html')),
    # 'api/'path에 users.urls의 path를 포함시켜 users.urls의 path에 'api/'가 앞에 붙음
    path('api/', include('api.urls')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
