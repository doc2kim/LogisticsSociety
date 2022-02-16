from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from users.models import User
from rest_framework_simplejwt import token_blacklist

# Register your models here.


@admin.register(User)
class CustomUserAdmin(UserAdmin):

    fieldsets = (
        (None, {"fields": ("email",)}),
        ('Personal Info', {
         'fields': ("name", "affiliated", "member_method",)}),
        ('Dues', {'fields': ('is_dues',)}),
        ('Permissions', {'fields': ('is_admin',)}),
        ('etc..', {
            'fields': ("last_login", "date_joined")
        })
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'name', "affiliated", "member_method", "is_dues"),
        }),
    )
    ordering = ('email',)

    list_filter = ('email', 'name', "affiliated", "member_method", "is_dues")

    list_display = (
        "email",
        "name",
        "affiliated",
        "member_method",
        "is_dues"
    )

    search_fields = ('email', 'name', "affiliated", "is_dues")


class OutstandingTokenAdmin(token_blacklist.admin.OutstandingTokenAdmin):

    def has_delete_permission(self, *args, **kwargs):
        return True  # or whatever logic you want


admin.site.unregister(token_blacklist.models.OutstandingToken)
admin.site.register(token_blacklist.models.OutstandingToken,
                    OutstandingTokenAdmin)
