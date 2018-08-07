from django.db import models

# Create your models here.
class Lead(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.CharField(max_length=300)
    picture = models.ImageField(default = "default.png")
    created_at = models.DateTimeField(auto_now_add=True)
