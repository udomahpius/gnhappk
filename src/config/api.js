import axios from "axios";
import { Cookie } from "next/font/google";
const LIVE_BASE_URL = "https://setly-adc71ba4fc26.herokuapp.com/api/v1/";
const LOCAL_BASE_URL = "http://localhost:4000/api/v1/";

export const noAuthAPI = axios.create({
    baseURL: LOCAL_BASE_URL,
    headers: {
        "Accept": "application/json, text/plain, */*",
        "Content-type": "application/json"
    },
    withCredentials: true
})

const api = () => {
    return axios.create({
        baseURL: LOCAL_BASE_URL,
        headers: {
            "Accept": "application/json, text/plain, */*",
            "Content-type": "application/json"
        },
        withCredentials: true
    });
}


export default api;