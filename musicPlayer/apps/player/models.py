from django.db import models


# 歌手信息
class Singer(models.Model):
    name = models.CharField(max_length=100, unique=True)
    is_delete = models.BooleanField(default=False)

    class Meta:
        db_table = 'singer'

    def __str__(self):
        return self.name


# 歌曲信息
class Song(models.Model):
    name = models.CharField(max_length=100, unique=False)
    singer_name = models.ForeignKey(Singer, on_delete=models.CASCADE)
    is_delete = models.BooleanField(default=False)

    class Meta:
        db_table = 'song'

    def __str__(self):
        return self.name