# Generated by Django 4.2.5 on 2023-09-15 18:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='appuser',
            name='is_staff',
            field=models.BooleanField(default=False, verbose_name='staff status'),
        ),
    ]
