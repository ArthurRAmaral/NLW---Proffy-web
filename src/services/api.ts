import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

console.log(process.env.REACT_APP_BACKEND_URL);
const api = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});

export default api;
