from django.core.exceptions import ValidationError
from django.db import models
from .constants import (
    PRODUCT_MAX_LENGTH,
    PRICE_MAX_DIGITS,
    PRICE_DECIMAL_PLACES,
)


class Product(models.Model):
    """Модель Продукт."""

    name = models.CharField(
        'Название продукта',
        max_length=PRODUCT_MAX_LENGTH,
        blank=False,
    )
    description = models.TextField(
        'Описание',
    )
    price = models.DecimalField(
        'Цена',
        max_digits=PRICE_MAX_DIGITS,
        decimal_places=PRICE_DECIMAL_PLACES
    )

    def validate_price(self):
        if self.price < 0:
            raise ValidationError('Цена должна быть положительным числом.')

    class Meta:
        verbose_name = 'Продукт'
        verbose_name_plural = 'Продукты'
        ordering = ('name', )

    def __str__(self):
        return f'{self.name}'
