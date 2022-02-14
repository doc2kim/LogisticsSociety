from django.contrib import admin
from .models import File


@admin.register(File)
class FileAdmin(admin.ModelAdmin):
    fieldsets = (
        ("files", {
            "fields": ("file",)}
         ),)
    list_filter = ("file",)
    list_display = (
        "file",
    )
    search_fields = ("file",)
