import axios from "axios"
const fetchUtil = axios .create({
    baseURL: "http://localhost:5000/api/v1"
})

export default fetchUtil