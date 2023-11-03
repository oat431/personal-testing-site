import axios from "axios"

const goApiClient = axios.create({
    baseURL: "http://localhost:8080",
    withCredentials: false,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    }
});

export default goApiClient;