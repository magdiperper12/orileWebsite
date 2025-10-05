import axios from "axios";

const BaseUrl = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_API_URL ||
    "https://test.orielclinics.com/api/frontend",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
  // withCredentials: true
});

export default BaseUrl;
