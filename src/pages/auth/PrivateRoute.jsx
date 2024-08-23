
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const hours = 9;
  const now = new Date().getTime();
  const setupTime = localStorage.getItem("time");

 
  if (!token || !setupTime || now - setupTime > hours * 60 * 60 * 1000) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;


