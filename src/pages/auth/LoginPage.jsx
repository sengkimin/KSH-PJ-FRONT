import { FaUser, FaLock } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.post("http://localhost:3000/auth/login", {
        email: username,
        password,
      });
      const { token, user } = response.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("time", new Date().getTime());

      navigate("/");
    } catch (error) {
      console.error("Login failed", error);
      setError("Login failed. Please check your credentials and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="username">
              Username
            </label>
            <div className="flex items-center border rounded px-3 py-2">
              <FaUser className="text-gray-400 mr-2" />
              <input
                className="appearance-none bg-transparent border-none w-full text-gray-700 leading-tight focus:outline-none"
                type="text"
                id="username"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2" htmlFor="password">
              Password
            </label>
            <div className="flex items-center border rounded px-3 py-2">
              <FaLock className="text-gray-400 mr-2" />
              <input
                className="appearance-none bg-transparent border-none w-full text-gray-700 leading-tight focus:outline-none"
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col text-center gap-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleLogin}
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
            <div className="text-sm">
              {error && <p style={{ color: "red" }}>{error}</p>}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
