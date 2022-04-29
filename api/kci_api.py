import requests
import xmltodict
import json
# import threading



def kci_ko_api():
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
        if json_results.get("MetaData") != None:
            json_get = json_results.get("MetaData").get("outputData")
        else:
            continue
        record_get = json_get.get("record")
        if json_get.get("record") != None:
            results.extend(record_get)
            year = int(year)++100
        else:
            results.reverse()
            with open("./frontend/src/Components/Academic/Thesis/json_ko_results.json", 'w') as outfile:
                json.dump(results, outfile, indent=4, ensure_ascii=False)
            break
        
def kci_en_api():
    results=[]
    year= 200901
    
    while True:
        url = "https://open.kci.go.kr/po/openapi/openApiSearch.kci"
        
        parameters ={
            "key" : "10934748",
            "apiCode" : "articleSearch",
            "journal" : "The Asian Journal of Shipping and Logistics",
            "institution" : "한국해운물류학회",
            "dateFrom": year,
            "dateTo": year+11,
            "displayCount": 100
        }
        response = requests.get(url, params=parameters, verify=False)
        
        xmlData = xmltodict.parse(response.text)
        json_data = json.dumps(xmlData)
        json_results = json.loads(json_data)
        if json_results.get("MetaData") != None:
            json_get = json_results.get("MetaData").get("outputData")
        else:
            continue
        record_get = json_get.get("record")
        if json_get.get("record") != None:
            results.extend(record_get)
            year = int(year)++100
        else:
            results.reverse()
            with open("./frontend/src/Components/Academic/Thesis/json_en_results.json", 'w') as outfile:
                json.dump(results, outfile, indent=4, ensure_ascii=False)
            break

kci_ko_api()
kci_en_api()

# def start_timer():
#     print("data refresh")
#     kci_ko_api()
#     kci_en_api()
#     threading.Timer(604800, start_timer).start()