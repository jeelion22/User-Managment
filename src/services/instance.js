import axios from "axios";

// define a baseURL for the aou call
const baseURL =
  "https://roadmap-day41-password-reset-backend-task.onrender.com/";
// const baseURL = "http://localhost:4001/api/users";

// create axios instances
const instance = axios.create({
  baseURL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

const protectedInstance = axios.create({
  baseURL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export { instance, protectedInstance };
