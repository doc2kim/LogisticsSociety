from django.contrib import admin
from .models import Notice, File, Image
# Register your models here.


@admin.register(Notice)
class NoticeAdmin(admin.ModelAdmin):

    fieldsets = (
        ("Info", {
            "fields": ("writer", "title", "hits", "top_fixed")}),
        ("Event Info", {
            "fields": ("schedule", "place", "home_fixed")
        }),
        ("Document", {
            "fields": ("content", "file", "image")}))

    list_filter = ('title', 'created_date',
                   "modified_date", "top_fixed", "home_fixed")

    list_display = (
        "title",
        "created_date",
        "modified_date",
        "top_fixed",
        "home_fixed"
    )

    search_fields = ('title', "created_date", "modified_date", "home_fixed")


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


@admin.register(Image)
class ImageAdmin(admin.ModelAdmin):
    fieldsets = (
        ("images", {
            "fields": ("image",)}
         ),)
    list_filter = ("image",)
    list_display = (
        "image",
    )
    search_fields = ("image",)
