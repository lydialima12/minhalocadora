import axios from "axios";

const api = axios.create({
    baseURL: "https://api-minha-locadora.herokuapp.com",
});

export default api;