// InstructorPrivateRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const InstructorPrivateRoute = ({ path, element }) => {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  // Check if the route is intended for instructors
  // Redirect to user's dashboard if instructor tries to access user's route
  if (path === "/instructor") {
    return <Navigate to="/user" />;
  }

  return element;
};

export default InstructorPrivateRoute;
