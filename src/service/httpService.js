import axios from "axios";
axios.defaults.withCredentials = true; // Global setting

class HttpService {
    static baseURL = "http://127.0.0.1:3000/api/v1";

    static async get({ path, query = "", headers }) {
        const response = await axios.get(
            `${HttpService.baseURL}/${path}?${query}`,
            { headers }
        );
        return response;
    }

    static async post({ path, body, query = "", headers }) {
        const response = await axios.post(
            `${HttpService.baseURL}/${path}?${query}`,
            JSON.stringify(body),
            { headers }
        );
        return response;
    }
}

export default HttpService;
