import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const savePlayerPoints = (data) =>
  API.post("/ranking/savepoints", data);


export const getRankingAgr = () => API.get("/ranking/listagr");
export const getRanking = () => API.get("/ranking/list");