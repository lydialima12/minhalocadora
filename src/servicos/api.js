import axios from "axios";

const api = axios.create({
    baseURL: "https://api-minha-locadora.herokuapp.com",
    // baseURL: "http://localhost:8080"
});

export default api;