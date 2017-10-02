from rest_framework import serializers
from django.contrib.auth.models import User
from createevent.models import Map, Trip, Evenement

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'id')

class EvenementSerializer(serializers.ModelSerializer):
	class Meta:
		model = Evenement
		fields = (	'pk', 'eventDate', 'eventTime', 'eventMoment', 'eventType', 
					'eventForecast', 'eventSurprising', 'eventImpression', 
					'eventImportance', 'feeling', 'feelingValue', 'angle', 
					'description', 'img', 'sound', 'mapWrapper')


class MapSerializer(serializers.ModelSerializer):
	class Meta:
		model = Map
		fields = (	'map_name', 'id')		

class TripSerializer(serializers.ModelSerializer):
	class Meta:
		model = Trip
		fields = (	'trip_name', 'id')	