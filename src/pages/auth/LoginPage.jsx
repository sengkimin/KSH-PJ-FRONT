import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState(""); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    setLoading(true);
    setError("");

 
    setTimeout(() => {
      localStorage.setItem("token", "fakeToken123");
      localStorage.setItem("user", JSON.stringify({ username, type }));
      localStorage.setItem("time", new Date().getTime());

      navigate("/"); 
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen ">
      <div className="flex flex-col justify-center w-full md:w-1/3 p-8 bg-white rounded-lg  mx-4 md:mx-0 md:mr-12">
        <div className="flex justify-center mb-6 md:mb-16">
          <img
            src="khslogo.jpg"
            alt="Logo"
            className="h-24 w-24 rounded-full"
          />
        </div>
        <h1 className="text-2xl md:text-3xl font-bold mb-2 ">Get Started</h1>
        <p className="text-gray-500 mb-12">Welcome to our organization KSH</p>
        <div className="flex flex-col items-center mb-14">
          <hr className="w-1/2 md:w-2/3 border-stone-600" />
        </div>
        <form className="space-y-5">
          <div className="mb-4">
            <label className="block text-sm font-bold mb-3" htmlFor="type">
              Type
            </label>
            <select
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full p-4 border border-stone-600 rounded-md outline-none"
            >
              <option  value="">Select your type</option>
              <option value="admin">Admin</option>
              <option value="education">Education Team</option>
              <option value="group">Group Leader</option>
              <option value="partner">Partner</option>
            </select>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-bold mb-3" htmlFor="username">
              Email
            </label>
            <div className="flex items-center border border-stone-600 rounded px-3 py-2">
              <FaUser className="text-gray-400 mr-2" />
              <input
                className="p-2 appearance-none bg-transparent border-none w-full text-gray-700 leading-tight focus:outline-none"
                type="text"
                id="username"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-16">
            <label className="block text-sm font-bold mb-3" htmlFor="password">
              Password
            </label>
            <div className="flex items-center border border-stone-600 rounded px-3 py-2">
              <FaLock className="text-gray-400 mr-2" />
              <input
                className="p-2 appearance-none bg-transparent border-none w-full text-gray-700 leading-tight focus:outline-none"
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <button
            className="w-full p-3 text-white bg-[#207137] rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-600"
            type="button"
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
          <div className="text-sm text-center mt-4">
            {error && <p className="text-red-500">{error}</p>}
          </div>
        </form>
      </div>

      <div className="hidden md:block md:w-3/6 h-screen mt-3">
        <img
          src="kshteam.jpg"
          alt="Group"
          className="object-cover w-full h-full rounded-xl"
        />
      </div>
    </div>
  );
};

export default LoginPage;
