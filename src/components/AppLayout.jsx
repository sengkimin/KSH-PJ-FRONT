
import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { FaUser, FaBars } from "react-icons/fa";
import PrivateRoute from "../pages/auth/PrivateRoute";

function AppLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.clear();
    navigate("/login");
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <PrivateRoute>
      <div className="bg-gray-100 h-screen flex flex-col md:flex-row">
    
        <div
          className={`fixed inset-y-0 left-0 w-64 bg-[#F0E7D4] text-white z-30 transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 transition-transform duration-300 ease-in-out md:w-80 flex-shrink-0 md:fixed md:left-0 md:top-0 md:h-screen`}
        >
          <div className="p-5 text-center text-2xl text-green-700 font-semibold border-b border-gray-700">
            KSH
          </div>
          <nav className="mt-4">
            <Link
              to="/"
              className="block text-lg md:text-xl font-bold text-black py-4 px-4 hover:bg-green-800 hover:text-white"
              onClick={closeSidebar}
            >
              Dashboard
            </Link>
            <Link
              to="/residents"
              className="block text-lg md:text-xl font-bold text-black py-4 px-4 hover:bg-green-800 hover:text-white"
              onClick={closeSidebar}
            >
              Residents List
            </Link>
            <Link
              to="/program"
              className="block text-lg md:text-xl font-bold text-black py-4 px-4 hover:bg-green-800 hover:text-white"
              onClick={closeSidebar}
            >
              Programs
            </Link>
            <Link
              to="/assesment"
              className="block text-lg md:text-xl font-bold text-black py-4 px-4 hover:bg-green-800 hover:text-white"
              onClick={closeSidebar}
            >
              Assessment
            </Link>
            <Link
              to="/reporting"
              className="block text-lg md:text-xl font-bold text-black py-4 px-4 hover:bg-green-800 hover:text-white"
              onClick={closeSidebar}
            >
              Reporting
            </Link>
          </nav>
        </div>

        <div className="flex-1 flex flex-col">
          <header className="flex items-center justify-between p-4 bg-white shadow-md">
            <div className="flex items-center space-x-4">
              <img
                src="khslogo.jpg"
                alt="Logo"
                className="h-8 w-8 md:h-10 md:w-10 rounded-full"
              />
            </div>
            <div className="flex items-center space-x-4">
              <button
                className="bg-gray-400 text-white p-2 rounded-full md:hidden" // Hide on desktop and laptop
                onClick={toggleSidebar}
              >
                <FaBars className="w-6 h-6" />
              </button>
              <button className="bg-gray-400 text-white p-2 md:p-3 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
                <FaUser className="w-4 h-4" />
              </button>
              <button
                onClick={handleLogOut}
                className="bg-red-600 text-white px-4 md:px-6 py-1 md:py-2 rounded hover:bg-red-800"
              >
                Log Out
              </button>
            </div>
          </header>

          <main className="flex-1 p-4 md:p-6 ml-0 md:ml-80 transition-all duration-300">
            <Outlet />
          </main>
        </div>
      </div>
    </PrivateRoute>
  );
}

export default AppLayout;





