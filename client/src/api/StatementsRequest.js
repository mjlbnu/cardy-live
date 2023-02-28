import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const uploadStatements = (data) =>
  API.post("/statements/register", data);

export const getGamerStatements = (id, bringLie = false) =>
  API.get(`/statements/${id}/gamerstatements/${bringLie}`);

export const saveStatements = (data) =>
  API.post("/statements/savestatements", data);

export const setStatementsPlayed = (id) =>
  API.post(`/statements/setstatementsplayed/${id}`);
