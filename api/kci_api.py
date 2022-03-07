import requests
import xmltodict
import json

# year = ["02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21"]
# print(year)
def kci_open_api():
    results=[]
    year= 200201
    
    while True:
        url = "https://open.kci.go.kr/po/openapi/openApiSearch.kci"
        
        parameters ={
            "key" : "10934748",
            "apiCode" : "articleSearch",
            "journal" : "해운물류연구",
            "institution" : "한국해운물류학회",
            "dateFrom": year,
            "dateTo": year+11,
            "displayCount": 100
        }
        response = requests.get(url, params=parameters, verify=False)
        
        xmlData = xmltodict.parse(response.text)
        json_data = json.dumps(xmlData)
        json_results = json.loads(json_data)
        json_get = json_results.get("MetaData").get("outputData")
        record_get = json_get.get("record")
        if json_get.get("record") != None:
            results.extend(record_get)
            year = int(year)++100
        else:
            results.reverse()
            with open("../frontend/src/Components/Academic/Thesis/json_results.json", 'w') as outfile:
                json.dump(results, outfile, indent=4, ensure_ascii=False)
            break
    
kci_open_api()