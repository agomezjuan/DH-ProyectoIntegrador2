import axios from "../libs/axios";

export const loginRequest = async (email, password) =>
  axios.post("http://localhost:8089/realms/proyecto-integrador/protocol/openid-connect/token", {
    email,
    password,
  });

export const registerRequest = async (data) =>
  axios.post("http://localhost:8090/api/v1/users/register", data);

export const profileRequest = async () => axios.get("/api/auth/profile");