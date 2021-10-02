import os.path

from django.shortcuts import render
from django.http import JsonResponse
from musicPlayer.settings import BASE_DIR

import json


def upload_music(request):

    file_dict = request.FILES

    for key, value in file_dict.items():
        path = os.path.join(BASE_DIR, "music/" + key)

        with open(path, "wb+") as file:
            for f in value.chunks():
                file.write(f)

    return JsonResponse("OK", safe=False, status=200)

