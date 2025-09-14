import axios from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const api = axios.create({
  baseURL: process.env.BACKEND_URL || "http://localhost:8000",
  withCredentials: true,
});

api.interceptors.request.use(async (config) => {
  const cookieStore = await cookies(); 
  const access = cookieStore.get("access")?.value;

  if (access) {
    config.headers.Authorization = `Bearer ${access}`;
  }

  return config;
});
