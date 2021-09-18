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


def getDataChecked(name, size, data):
    res = []
    for i in range(size):
        checkBox = json.loads(data[name+str(i)])
        if checkBox["flag"] == True:
            res.append(checkBox["name"])
    return res


@csrf_exempt
def saveProfile(request):
    data = request.POST
    bg_image = request.FILES.get("image", None)

    industrySize = int(data.get("industrySize", 0))
    neighbourhoodSize = int(data.get("neighbourhoodSize", 0))

    business_industries = getDataChecked("industry", industrySize, data)
    neighbourhoods = getDataChecked("neighbourhood", neighbourhoodSize, data)
    tags = data["tags"].split(',')


    profile = {
        "businessName": data.get("businessName", None),
        "businessOwnerName": data.get("businessOwnerName", None),
        "description": data.get("businessOwnerName", None),
        "address": data.get("address", None),
        "businessContact": data.get("businessContact", None),
        "industries": business_industries,
        "neighbourhoods": neighbourhoods,
        "tags": tags,
        "image": gfs.put(bg_image)
    }

    db.profiles.insert_one(profile)

    return HttpResponse("Profile Saved and awaiting approval !")
