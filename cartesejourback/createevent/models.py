from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token


@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
	if created:
		Token.objects.create(user=instance)

def getId ():
	value = values.objects.get(name=value.toString())
	print(value.id)

# Create your models here.
class Evenement(models.Model):
	eventDate = models.DateField(auto_now=False, auto_now_add=False)
	eventTime = models.TimeField(auto_now=False, auto_now_add=False, blank=True, null=True)
	eventMoment = models.CharField(max_length=15)
	eventType = models.CharField(max_length=100)
	eventForecast = models.PositiveIntegerField(validators=[MinValueValidator(0), MaxValueValidator(100)])
	eventSurprising = models.PositiveIntegerField(validators=[MinValueValidator(0), MaxValueValidator(100)])
	eventImpression = models.PositiveIntegerField(validators=[MinValueValidator(0), MaxValueValidator(100)])
	feeling = models.CharField(max_length=150)
	feelingValue = models.CharField(max_length=100)
	angle = models.CharField(max_length=100)
	description = models.TextField(blank=True, null=True)
	img = models.CharField(max_length=100, blank=True, null=True)
	sound = models.CharField(max_length=100, blank=True, null=True)
	mapWrapper = models.ForeignKey('Map', null=True)


class Map(models.Model):
	map_name = models.CharField(max_length=50)
	# trip_name = models.ForeignKey('Trip')


class Trip(models.Model):
	trip_name = models.CharField(max_length=50)


