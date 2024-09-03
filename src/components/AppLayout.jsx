import "../App.css";
import { useState } from "react";
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
      <div className="relative bg-gray-100 h-auto flex">
        <div
          className={`fixed inset-y-0 left-0 md:w-80 bg-[#F0E7D4] sm:w-64 text-white transform transition-transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:static md:translate-x-0 md:w-80`}
        >
          <div className="p-5 text-center text-2xl text-green-700 font-semibold border-b border-gray-700">
            KSH
          </div>
          <nav className="mt-4">
       
            <Link
              to="/"
              className="block text-xl font-bold text-black py-4 px-4 hover:bg-green-800 hover:text-white"
              onClick={closeSidebar}
            >
              Residents List
            </Link>
            <Link
              to="/program"
              className="block text-xl font-bold text-black py-4 px-4 hover:bg-green-800 hover:text-white"
              onClick={closeSidebar}
            >
              Programs
            </Link>
            <Link
              to="/assesment"
              className="block text-xl font-bold text-black py-4 px-4 hover:bg-green-800 hover:text-white"
              onClick={closeSidebar}
            >
              Assessment
            </Link>
            <Link
              to="/reporting"
              className="block text-xl font-bold text-black py-4 px-4 hover:bg-green-800 hover:text-white"
              onClick={closeSidebar}
            >
              Reporting
            </Link>
            <Link
              to="/medical"
              className="block text-xl font-bold text-black py-4 px-4 hover:bg-green-800 hover:text-white"
              onClick={closeSidebar}
            >
              Medical
            </Link>
          </nav>
        </div>

        <div className={`flex-1 flex flex-col ${isSidebarOpen ? "overflow-hidden" : ""}`}>
          <header className="flex items-center justify-between p-4 bg-white shadow-md">
            <div className="justify-center">
              <img
                src="/khslogo.jpg"
                alt="Logo"
                className="h-10 w-10 rounded-full"
              />
            </div>
            <div className="flex items-center space-x-4">
              <button
                className={`text-black p-2 rounded-full md:hidden transition-colors duration-300 ${
                  isSidebarOpen ? "text-green-600" : ""
                }`}
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
                Sign Out
              </button>
            </div>
          </header>

          <main className="flex-1 p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </PrivateRoute>
  );
}

export default AppLayout;



