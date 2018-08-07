from django.contrib import admin

# Import model
from .models import Lead

# Register your models here.
class LeadAdmin(admin.ModelAdmin):
    fieldsets = [
        ('Name', {'fields': ['name']}),
        ('Email', {'fields': ['email']}),
        ('Message', {'fields': ['message']}),
        ('Picture', {'fields': ['picture']})
    ]
    list_display = ('name', 'created_at')
    list_filter = ['created_at']
    search_fields = ['name']


admin.site.register(Lead, LeadAdmin)
