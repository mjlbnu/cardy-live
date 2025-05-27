import axios from "axios";

const javaAPI = axios.create({
  baseURL: "http://localhost:8080/ai"
});

const nodeAPI = axios.create({
  baseURL: "http://localhost:5000"
});

export const generateStatements = async (names) => {
  return await javaAPI.get("/statements-creator", {
    params: { names }
  });
}

export const getAIResponse = async (prompt) => {
  return await javaAPI.get("/ask-ai-with-options", {
    params: { prompt }
  });
}

export const saveStatementsList = async (data) => {
  return await nodeAPI.post("/statements/save-statements-list", data);
}