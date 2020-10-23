import axios from 'axios'

const SERVICES_REST_API_URL = "http://localhost:9090/api/v1/services";

class Services {
    getServices() {
        return axios.get(SERVICES_REST_API_URL);
    }

    createServices(service) {
        return axios.post(SERVICES_REST_API_URL, service)
    }

    getServicesById(serviceId) {
        return axios.get(SERVICES_REST_API_URL + '/' + serviceId)
    }

    updateServices(service, serviceId) {
        return axios.put(SERVICES_REST_API_URL + '/' + serviceId, service)
    }

    deleteService(serviceId) {
        return axios.delete(SERVICES_REST_API_URL + '/' + serviceId)
    }
}

export default new Services();