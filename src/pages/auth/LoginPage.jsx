import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";

const LoginPage = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    setLoading(true);
    setError("");
  
    const loginData = {
      identifier: email,
      password: password,
    };
  
    try {
      const response = await fetch("https://strapi.ksh.thewmad.info/api/auth/local", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        localStorage.setItem("jwtToken", result.jwt);
  
        // Fetch user details including role
        const userId = result.user.id;
        const userResponse = await fetch(`https://strapi.ksh.thewmad.info/api/users/${userId}?populate=role,profile_img`, {
          headers: {
            Authorization: `Bearer ${result.jwt}`,
          },
        });
  
        const userResult = await userResponse.json();
  
        if (userResponse.ok) {
          const roleName = userResult.role?.name; // Extracting role name
          console.log("User role:", roleName);
  
          localStorage.setItem("userRole", roleName); // Store the user's role
  
          // Check if profile_img exists and has formats
          const imageuser = userResult.profile_img?.formats?.thumbnail?.url;
          
          if (imageuser) {
            localStorage.setItem("imageUser", imageuser);
          } else {
            console.warn("No profile image found.");
          }
  
          if (typeof setIsLoggedIn === "function") {
            setIsLoggedIn(true);
          } else {
            console.error("setIsLoggedIn is not a function");
          }
  
          // Redirect based on role if needed
          navigate("/");
        } else {
          setError(userResult.error?.message || "Failed to fetch user details.");
        }
      } else {
        setError(result.error?.message || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError(error.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };  
  
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-4">
      <div className="flex flex-col justify-center w-full md:w-1/3 p-8 bg-white rounded-lg mx-4 md:mx-0 md:mr-12 ">
        <div className="flex justify-center mb-6 md:mb-16">
          <img src="https://res.cloudinary.com/dq5usncvp/image/upload/v1727160393/photo_2024_09_24_13_43_19_74e3099b67.jpg" alt="Logo" className="h-24 w-24 rounded-full" />
        </div>
        <h1 className="text-2xl md:text-3xl font-bold mb-2">Get Started</h1>
        <p className="text-gray-500 mb-12">Welcome to our organization KSH</p>
        <div className="flex flex-col items-center mb-6">
          <hr className="w-1/2 md:w-2/3 border-stone-600 mb-4" />
        </div>
        <form className="space-y-4">
          <div className="mb-6">
            <label className="block text-sm font-bold mb-3" htmlFor="email">
              Email
            </label>
            <div className="flex items-center border border-stone-600 rounded px-3 py-2">
              <FaUser className="text-gray-400 mr-2" />
              <input
                className="p-2 bg-transparent border-none w-full text-gray-700 leading-tight focus:outline-none"
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-bold mb-3" htmlFor="password">
              Password
            </label>
            <div className="flex items-center border border-stone-600 rounded px-3 py-2">
              <FaLock className="text-gray-400 mr-2" />
              <input
                className="p-2 bg-transparent border-none w-full text-gray-700 leading-tight focus:outline-none"
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <button
            className={`w-full p-3 text-white rounded-md ${
              loading ? "bg-gray-500 cursor-not-allowed" : "bg-[#207137] hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-600"
            }`}
            type="button"
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
          {error && <p className="text-red-500 text-center mt-4">{error}</p>}
        </form>
      </div>

      <div className="hidden md:block md:w-1/2 h-screen mt-3">
        <img src="https://res.cloudinary.com/dq5usncvp/image/upload/v1727161592/kshteam_f1e12ff6d3.jpg" alt="Group" className="object-cover w-full h-full rounded-xl" />
      </div>
    </div>
  );
};

export default LoginPage;
