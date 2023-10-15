import api from "./apiClient";

export default {
    demoHello(name : string) {
        return api.get(`/demo/hello?name=${name}`);
    }
}