from rest_framework import serializers
from createevent.models import *

class EvenementSerializer(serializers.HyperlinkedModelSerializer):
	class Meta:
		model = Evenement
		fields = ('eventDate', 'eventTime', 'eventMoment', 'eventType', 
				'eventForecast', 'eventSurprising', 'eventImpression', 
				'feeling', 'feelingValue', 'angle', 
				'description', 'img', 'sound', 'mapWrapper')

