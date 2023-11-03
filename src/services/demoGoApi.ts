import api from './goApiClient';

export default {
    demoHello() {
        return api.get(`/api/v1/hello-world`);
    }
}