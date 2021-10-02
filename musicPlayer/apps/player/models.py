from django.db import models


class Singer(models.Model):
    name = models.CharField(max_length=10, unique=True)
    is_delete = models.BooleanField(default=False)

    class Meta:
        db_table = 'singer'

    def __str__(self):
        return self.name


class Song(models.Model):
    name = models.CharField(max_length=15, unique=False)
    singer_name = models.ForeignKey(Singer, on_delete=models.CASCADE)
    is_delete = models.BooleanField(default=False)

    class Meta:
        db_table = 'song'

    def __str__(self):
        return self.name
