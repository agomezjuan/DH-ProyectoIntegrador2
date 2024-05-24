import axios from "../libs/axios";

export const loginRequest = async (email, password) =>
  axios.post("/api/auth/login", {
    email,
    password,
  });

export const registerRequest = async (data) =>
  axios.post("/api/auth/register", data);

export const profileRequest = async () => axios.get("/api/auth/profile");