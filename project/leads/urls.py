# Import Modules
from django.urls import path, re_path
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    re_path('api/lead/', views.LeadListCreate.as_view() ),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
