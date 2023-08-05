import React from "react";
import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout/MainLayout.jsx";
import Landing from "../components/Landing/Landing.jsx";
import Login from "../pages/Auth/Login.jsx";
import Signup from "../pages/Auth/Signup.jsx";
import User from "../../src/components/dashboard/user/user.jsx"
import Instructor from "../components/dashboard/instructor/instructor.jsx";
import PrivateRoute from "./PrivateRoute"; // Import the PrivateRoute component

export const routes =  [
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Landing></Landing>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/signup",
        element: <Signup></Signup>
      },
      {
        path: "/user",
        element: <PrivateRoute path="/user" element={<User />} requiredRole="user" />
      },
      {
        path: "/instructor",
        element: <PrivateRoute path="/instructor" element={<Instructor />} requiredRole="instructor" />
      }
    ]
  }
];

const router = createBrowserRouter(routes);

export default router;
