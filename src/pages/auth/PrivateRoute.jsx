// src/components/PrivateRoute.jsx 
import React from "react"; 
import { Navigate } from "react-router-dom"; 
 
const PrivateRoute = ({ children }) => { 
  const token = localStorage.getItem("jwtToken"); 
 
  if (!token) { 
    // User is not logged in, redirect to login page 
    return <Navigate to="/login" />; 
  } 
 
  return children; 
}; 
 
export default PrivateRoute;