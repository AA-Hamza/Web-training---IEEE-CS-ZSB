from django.db import models
from django.urls import reverse
#from django.utils.translation import gettext_lazy as _

class TodoItem(models.Model):
    text = models.CharField(max_length=256)

    class PriorityChoices(models.TextChoices):
        LOW = "LOW"
        NORMAL = "NORMAL"
        HIGH = "HIGH"
    
    priority = models.CharField(
            max_length = 6,
            choices = PriorityChoices.choices,
            default = PriorityChoices.NORMAL,
    )

    def __str__(self):
        return self.text[:50]

    def get_absolute_url(self):
        return reverse('index')
