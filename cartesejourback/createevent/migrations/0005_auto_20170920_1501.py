# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2017-09-20 15:01
from __future__ import unicode_literals

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('createevent', '0004_auto_20170920_1340'),
    ]

    operations = [
        migrations.AlterField(
            model_name='evenement',
            name='description',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='evenement',
            name='eventForecast',
            field=models.PositiveIntegerField(validators=[django.core.validators.MinValueValidator(0), django.core.validators.MaxValueValidator(100)]),
        ),
        migrations.AlterField(
            model_name='evenement',
            name='eventImpression',
            field=models.PositiveIntegerField(validators=[django.core.validators.MinValueValidator(0), django.core.validators.MaxValueValidator(100)]),
        ),
        migrations.AlterField(
            model_name='evenement',
            name='eventSurprising',
            field=models.PositiveIntegerField(validators=[django.core.validators.MinValueValidator(0), django.core.validators.MaxValueValidator(100)]),
        ),
        migrations.AlterField(
            model_name='evenement',
            name='eventTime',
            field=models.TimeField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='evenement',
            name='img',
            field=models.ImageField(blank=True, null=True, upload_to=''),
        ),
        migrations.AlterField(
            model_name='evenement',
            name='sound',
            field=models.FileField(blank=True, null=True, upload_to=''),
        ),
    ]