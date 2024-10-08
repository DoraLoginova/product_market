from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from products.views import ProductViewSet

router = DefaultRouter()
router.register(r'api/products', ProductViewSet, basename='product')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
]
