import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, allowedRoles }) => {
  const token = localStorage.getItem("jwtToken");
  const userRole = localStorage.getItem("userRole"); // Assuming role is stored in localStorage after login

  if (!token) {
    // User is not logged in, redirect to login page
    return <Navigate to="/login" />;
  }

  if (allowedRoles && !allowedRoles.includes(userRole)) {
    // If user role is not allowed, redirect to an appropriate page (e.g., dashboard)
    return <Navigate to="/" />;
  }

  return children;
};

export default PrivateRoute;
