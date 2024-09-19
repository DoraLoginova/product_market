from django.contrib import admin
from django.contrib.auth.models import Group

from .models import Product

admin.site.unregister(Group)


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = (
        'id', 'name', 'description', 'price',
    )
    search_fields = (
        'name', 'price',
    )
    list_filter = ('name', 'price',)
    empty_value_display = '-пусто-'
