import CheckPrimeRequest from "../model/checkPrimeRequest";
import api from "./apiClient"

const apiTest = {
    ping() {
        return api.get("/playground/ping");
    },
    greet(name: string) {
        return api.get(`/playground/greeting?name=${name}`);
    },
    first1kprime() {
        return api.get("/playground/first-1000-primes");
    },
    checkPrime(check: CheckPrimeRequest) {
        return api.post(`/playground/check-prime`, check);
    }

};

export default apiTest;