import { instance, protectedInstance } from "./instance";

// define user servies
const userServices = {
  // register user
  register: async (firstname, lastname, email, confirmPassword) => {
    return await instance.post("/create", {
      name: `${firstname} ${lastname}`,
      username: email,
      password: confirmPassword,
    });
  },
  //   login user
  login: async (email, password) => {
    return await protectedInstance.post(
      "/login",
      { username: email, password },
      { withCredentials: true }
    );
  },
  //   get current user
  getCurrentUser: async () => {
    return await protectedInstance.get("/me");
  },
  //   logout currently logged user
  logout: async () => {
    return await protectedInstance.post("/logout");
  },
};

export default userServices;
