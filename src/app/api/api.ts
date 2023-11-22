import axios from "axios";

export const API_BASE_URL = "https://eleganciaalamode-api.onrender.com/api";

export const api = axios.create({
    baseURL: API_BASE_URL,
    timeout: 70000,
})