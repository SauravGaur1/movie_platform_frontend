import axios from "axios";

class HttpService {

    static baseURL = "http://localhost:3000/api/v1";

    static async get({
        path,
        query = "",
        headers,
    }) {
        const response = await axios.get(`${HttpService.baseURL}/${path}?${query}`, { headers });
        return response;
    }

    static async post({
        path,
        body,
        query,
        headers,
    }) {
        const response = await axios.post(`${HttpService.baseURL}/${path}?${query}`, body, { headers });
        return response;
    }

}

export default HttpService;