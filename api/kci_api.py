import requests
import json




def kci_open_api():
    """kci 논문 정보"""
    
    url = "https://open.kci.go.kr/po/openapi/openApiSearch.kci"
    
    parameters ={
        "key" : "10934748",
        "affiliation:":"한국해운물류학회",
        "apiCode" : "articleSearch"
    }
    
    response = requests.get(url, params=parameters, verify=False)
    print(response)
    
kci_open_api()