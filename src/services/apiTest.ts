import axios from "axios";
import CheckPrimeRequest from "../model/checkPrimeRequest";

const api = axios.create({
    baseURL: "http://localhost:9099",
});

const apiTest = {
    ping() {
        return api.get("/ping");
    },
    greet(name: string) {
        return api.get(`/greeting?name=${name}`);
    },
    first1kprime() {
        return api.get("/first-1000-primes");
    },
    checkPrime(check: CheckPrimeRequest) {
        return api.post(`/check-prime`, check);
    }

};

export default apiTest;