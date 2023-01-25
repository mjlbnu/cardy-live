import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const getUsers = () => API.get("/user/list");
export const getUser = (id) => API.get(`/user/id/${id}`);
export const saveUser = (data) => API.post(`/user/updateuser`, data);
