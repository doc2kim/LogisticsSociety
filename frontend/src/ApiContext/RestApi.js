
import axios from "axios";
// require('dotenv').config();

// console.log(process.env.HOME_URL)
const api = axios.create({
    baseURL: './api/',
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
