from rest_framework import serializers
from django.contrib.auth.models import User
from createevent.models import Evenement, Map, Trip

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'groups')


class EvenementSerializer(serializers.ModelSerializer):
    mapWrapper = serializers.SlugRelatedField(
    	many=True,
    	read_only=True,
    	slug_field='mapName'
    )

    class Meta:
        model = Evenement
        fields = (	'eventDate', 'eventTime', 'eventMoment', 'eventType', 
					'eventForecast', 'eventSurprising', 'eventImpression', 
					'feeling', 'feelingValue', 'angle', 
					'description', 'img', 'sound', 'mapWrapper')

class MapSerializer(serializers.ModelSerializer):
	class Meta:
		model = Map
		fields = (	'map_name', 'id')		

class TripSerializer(serializers.ModelSerializer):
	class Meta:
		model = Trip
		fields = (	'trip_name', 'id')		