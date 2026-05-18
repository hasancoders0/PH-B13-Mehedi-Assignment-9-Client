import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/login",
        element: <Login />,
      },

      {
        path: "/register",
        element: <Register />,
      },

      {
        path: "/add-tutor",
        element: (
          <PrivateRoute>
            <h1 className="text-5xl text-center mt-20 font-bold">
              Add Tutor Page
            </h1>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;