import axios from "axios";

const BASE_URL = "http://localhost:5000/api"
const accessToken = (JSON.parse(JSON.parse(localStorage.getItem("persist:root")).currentUser)?.accessToken);
const TOKEN = {accessToken}
console.log(accessToken);

export const publicRequest = axios.create({
    baseURL:BASE_URL,
})
export const userRequest = axios.create({
    baseURL:BASE_URL,
    header:{token:`Bearer ${TOKEN}`}
})