import os.path

from django.shortcuts import render
from django.http import JsonResponse
from musicPlayer.settings import BASE_DIR
from .models import Song, Singer

import json


def upload_music(request):

    # 上传文件到服务器时，不需要转化为 json
    # 上传数组，字典的时候，需要转化为 json 格式
    file_dict = request.FILES

    for key, value in file_dict.items():
        singer = key.split("-")[0]
        song = key.split('-')[1]

        # 判断歌手是否存在
        try:
            Singer.objects.get(name=singer)

        except Singer.DoesNotExist:
            Singer.objects.create(name=singer, is_delete=False)

        else:
            pass

        # 判断歌曲是否存在
        try:
            Song.objects.get(name=song, singer_name_id=Singer.objects.get(name=singer).id)

        except Song.DoesNotExist:
            Song.objects.create(
                name=song,
                singer_name_id=Singer.objects.get(name=singer).id,
                is_delete=False
            )

        else:
            pass

        id = Song.objects.get(name=song, singer_name_id=Singer.objects.get(name=singer).id).id
        path = os.path.join(BASE_DIR, "music/" + str(id) + '.' + song.split('.')[1])

        with open(path, "wb+") as file:
            for f in value.chunks():
                file.write(f)

    return JsonResponse("OK", safe=False, status=200)


def search_music(request):

    keyword = request.GET.get('key')

    result_list = []
    result_dict = {}

    for ele in Song.objects.filter(name__contains=keyword):
        result_dict["id"] = ele.id
        result_dict["song"] = ele.name
        result_dict["singer"] = Singer.objects.get(id=ele.singer_name_id).name
        result_list.append(result_dict)

    return JsonResponse(result_list, safe=False, status=200)


def add_music_to_list(request):

    music_id = request.GET.get('key')
    path = os.path.join(BASE_DIR, "playlist/music_list.txt")

    with open(path, "a") as musicid:
        musicid.write(music_id + '-')

    return JsonResponse('OK', safe=False, status=200)





