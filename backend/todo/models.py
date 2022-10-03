from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator

# Create your models here.


class Todo(models.Model):
    title = models.CharField(max_length=50, null=False)
    details = models.TextField(max_length=120, null=False)
    start = models.DateTimeField(help_text='Start Date')
    end = models.DateTimeField(help_text='End Date')
    story_points = models.IntegerField(default=0, null=False, validators=[
                                       MinValueValidator(0), MaxValueValidator(100)])

    class Status(models.TextChoices):
        OPEN = 'open'
        INPROGRESS = 'in progress'
        DONE = 'done'

    status = models.CharField(
        max_length=20,
        choices=Status.choices,
        default=Status.OPEN,
        null=False,
    )

    def __str__(self):
        return self.title
