from django.contrib import admin

# Import model
from .models import Lead

# Register your models here.
class LeadAdmin(admin.ModelAdmin):
    fieldsets = [
        ('Name', {'fields': ['name']}),
        ('Email', {'fields': ['email']}),
        ('Message', {'fields': ['message']}),
    ]

admin.site.register(Lead, LeadAdmin)
