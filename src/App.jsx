import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeNav from "./wrappers/HomeNav";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import DashboardNav from "./wrappers/DashboardNav";
import { loader as UserLoader } from "./wrappers/DashboardNav";
import ForgotPassword from "./components/ForgotPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeNav />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "forgotpassword",
        element: <ForgotPassword />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardNav />,
    loader: UserLoader,
    children: [
      {
        path: "dashboard",
        element: <h1>Dashboard</h1>,
      },
      {
        path: "profile",
        element: <h1>Profile</h1>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
