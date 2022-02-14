// import { createContext, useState, useEffect } from "react";

import axios from "axios";


const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
    headers: {
        'Content-Type': 'application/json'
    }
});

export const noticeAxios = () => api.get("notice/")

export const noticeSearchAxios = (e) => {
    e.preventDefault()
    return api.get("notice/", {
        params: {
            search: e.target.search.value
        }
    })
}


export const noticeDetailAxios = (id) => api.get(`notice/${id}/`)
export const newsAxios = () => api.get("news")
export const newsDetailAxios = (id) => api.get(`news/${id}/`)
export const fileAxios = () => api.get('files/')
