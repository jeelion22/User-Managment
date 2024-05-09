import { instance, protectedInstance } from "./instance";

// define user servies
const userServices = {
  // register user
  register: async (firstname, lastname, email, confirmPassword) => {
    return await instance.post("api/users/create", {
      name: `${firstname} ${lastname}`,
      username: email,
      password: confirmPassword,
    });
  },
  //   login user
  login: async (email, password) => {
    return await protectedInstance.post(
      "api/users/login",
      { username: email, password },
      { withCredentials: true }
    );
  },
  //   get current user
  getCurrentUser: async () => {
    return await protectedInstance.get("api/users/me");
  },
  //   logout currently logged user
  logout: async () => {
    return await protectedInstance.post("api/users/logout");
  },

  forgotpassword: async () => {
    return await instance.post("api/users/forgotpassword");
  },
};

export default userServices;
