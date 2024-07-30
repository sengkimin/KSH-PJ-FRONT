import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  let isLoggedIn = true;

  const token = localStorage.getItem("token");
  const hours = 9;
  const now = new Date().getTime();
  const setupTime = localStorage.getItem("time");
  const user = localStorage.getItem("user");

  if (!token || !setupTime || !user) {
    isLoggedIn = false;
  } else {
    if (now - setupTime > hours * 60 * 60 * 1000) {
      isLoggedIn = false;
    }
  }

  return isLoggedIn ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
