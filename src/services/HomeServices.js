import axios from "axios";

const apiClient = axios.create({
    baseURL:
        "https://my-json-server.typicode.com/dimitrileduc/vue-holidayProject-server",
    withCredentials: false,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});

export default {
    getHomeData() {
        return apiClient.get("/home");
    },
};
