import axios from "axios";

// const baseURL = "http://127.0.0.1:4002"
const baseURL = "https://cv.beestalent.jobs"

// const baseURL = "http://iu4juaymdk.preview.infomaniak.website"

export const axiosPublic = axios.create({
    baseURL:baseURL
})
const token = localStorage.getItem('accessToken');

export const axiosPrivate = axios.create({
    baseURL: baseURL,
    headers: { 'Content-Type': 'application/json'},
    withCredentials: true
});


