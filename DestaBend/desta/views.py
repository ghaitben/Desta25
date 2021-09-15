from django.http import HttpResponse, JsonResponse
import json
from pymongo import MongoClient
from bson import json_util

client = MongoClient("mongodb://ghaitben:1qsdqs54qdSDd1QQSdfQAZ54513@0:27017/desta?authSource=admin")
db = client['desta']


def home(request):
    res = db.profiles.find({})
    jres = json.loads(json_util.dumps(res))
    return JsonResponse(jres, safe=False)
