from django.contrib import admin
from django.conf import settings
from django.urls import path, include
from django.conf.urls.static import static
from django.views.generic import TemplateView


# routes = getattr(settings, 'REACT_ROUTES', [])
urlpatterns = [
    path('admin/', admin.site.urls),
    # re_path(r'^(%s)?$' % '|'.join(routes), TemplateView.as_view(template_name='index.html')),
    path("", TemplateView.as_view(template_name='index.html')),
    # 'api/'path에 users.urls의 path를 포함시켜 users.urls의 path에 'api/'가 앞에 붙음
    path('api/', include('api.urls')),
]+static(settings.STATIC_URL, document_root=settings.STATIC_ROOT) + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
