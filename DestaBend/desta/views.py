from django.http import HttpResponse, JsonResponse
import json, gridfs
from django.views.decorators.csrf import csrf_exempt
from pymongo import MongoClient
from bson import json_util

client = MongoClient("mongodb://ghaitben:1qsdqs54qdSDd1QQSdfQAZ54513@0:27017/desta?authSource=admin")
db = client['desta']
gfs = gridfs.GridFS(db)

def home(request):
    res = db.profiles.find({})
    jres = json.loads(json_util.dumps(res))
    return JsonResponse(jres, safe=False)

@csrf_exempt
def data(request):
    # dd = json.loads(request.body.decode('utf-8'))
    dd = request.POST
    bg_image = request.FILES.get("image", None)

    profile = {
        "businessName": dd.get("businessName", None),
        "businessOwnerName": dd.get("businessOwnerName", None),
        "description": dd.get("businessOwnerName", None),
        "address": dd.get("address", None),
        "publictContact": dd.get("publictContact", None),
        "businessContact": dd.get("businessContact", None),
        "image": None if bg_image == None else gfs.put(bg_image) ,  #need to handle the default image case
    }

    db.profiles.insert_one(profile)

    return HttpResponse("Profile Saved and awaiting approval !")
