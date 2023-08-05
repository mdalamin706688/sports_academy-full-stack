import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth"; // Adjust the import path based on your project's structure

const PrivateRoute = ({ path, element, roles }) => {
  const { isLoggedIn, userRole } = useAuth(); // Destructure userRole from useAuth

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  if (roles && !roles.includes(userRole)) {
    // Redirect to a suitable page for unauthorized access
    return <Navigate to="/unauthorized" />;
  }

  return element;
};

export default PrivateRoute;
