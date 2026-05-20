import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home/Home";

import Login from "../pages/Login/Login";

import Register from "../pages/Register/Register";

import AddTutor from "../pages/AddTutor/AddTutor";

import AllTutors from "../pages/AllTutors/AllTutors";

import PrivateRoute from "./PrivateRoute";

import MyBookedSessions from "../pages/MyBookedSessions/MyBookedSessions";

import MyTutors from "../pages/MyTutors/MyTutors";

import ErrorPage from "../pages/ErrorPage/ErrorPage";

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
        path: "/all-tutors",
        element: <AllTutors />,
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
            <AddTutor />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-booked-sessions",

        element: (
          <PrivateRoute>
            <MyBookedSessions />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-tutors",

        element: (
          <PrivateRoute>
            <MyTutors />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
