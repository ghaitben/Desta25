from django.http import HttpResponse, JsonResponse
import json, gridfs, codecs
from django.views.decorators.csrf import csrf_exempt
from pymongo import MongoClient
from bson import json_util, ObjectId

client = MongoClient("mongodb://ghaitben:1qsdqs54qdSDd1QQSdfQAZ54513@0:27017/desta?authSource=admin")
db = client['desta']
gfs = gridfs.GridFS(db)


def getDataChecked(name, size, data):
    res = []
    for i in range(size):
        checkBox = json.loads(data[name+str(i)])
        if checkBox["flag"] == True:
            res.append(checkBox["name"])
    return res

def Id_toImage(datapoint):
    imgId = ObjectId(datapoint["image"]["$oid"])
    img = gfs.get(imgId)
    base64_img = codecs.encode(img.read(), "base64")
    datapoint["image"] = base64_img.decode('utf-8')
    datapoint["_id"] = datapoint["_id"]["$oid"]
    return datapoint


def home(request):
    res = db.profiles.find({})
    jres = json.loads(json_util.dumps(res))
    return JsonResponse(jres, safe=False)

def getdata(request):
    out = []
    res = db.profiles.find({})
    jres = json.loads(json_util.dumps(res))
    for datapoint in jres:
        datapoint = Id_toImage(datapoint)
        out.append(datapoint)

    return JsonResponse(out, safe=False)

def getuser(request):
    _id = request.GET.get("_id", None)
    if _id:
        data = db.profiles.find({"_id": ObjectId(_id)})
        data = json.loads(json_util.dumps(data))
        data = Id_toImage(data[0])
    return JsonResponse(data, safe=False)


@csrf_exempt
def saveProfile(request):
    # data = request.POST
    data = json.loads(request.body.decode('utf-8'))
    bg_image = request.FILES.get("image", None)

    industrySize = int(data.get("industrySize", 0))
    neighbourhoodSize = int(data.get("neighbourhoodSize", 0))

    business_industries = getDataChecked("industry", industrySize, data)
    neighbourhoods = getDataChecked("neighbourhood", neighbourhoodSize, data)
    tags = data.get("tags", None)
    if tags:
        tags = tags.split(',')
    else:
        tags = ["No tags specified"]

    profile = {
        "businessName": data.get("businessName", None),
        "businessOwnerName": data.get("businessOwnerName", None),
        "description": data.get("description", None),
        "address": data.get("address", None),
        "businessContact": data.get("businessContact", None),
        "publicContact": data.get("publicContact", None),
        "industries": business_industries,
        "neighbourhoods": neighbourhoods,
        "tags": tags,
        "image": gfs.put(bg_image)
    }

    db.profiles.insert_one(profile)

    return HttpResponse("Profile Saved and awaiting approval !")
