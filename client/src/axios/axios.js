import axios from "axios";

const baseURL = "http://127.0.0.1:3500"

export const axiosPublic = axios.create({
    baseURL:baseURL
})


export const axiosPrivate = axios.create({
    baseURL: baseURL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});


