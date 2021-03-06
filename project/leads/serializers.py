from rest_framework import serializers
from leads.models import Lead

class LeadSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Lead
        fields = '__all__'
