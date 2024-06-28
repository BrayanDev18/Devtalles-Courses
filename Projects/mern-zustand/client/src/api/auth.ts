import axios from "../libs/axios"

export const loginRequest = async (email: string, password: string) => {
  const res = axios.post("/login", {
    email,
    password,
  });
  
  return res;
}

export const profileRequest = async () => {
  const res = axios.get("/profile");

  return res
}