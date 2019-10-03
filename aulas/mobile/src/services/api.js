import axios from "axios";

const api = axios.create({
  baseURL: "http://172.16.6.64:3333"
});

export default api;
