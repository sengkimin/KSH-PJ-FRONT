

import "../App.css";
import { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { FaUser, FaBars } from "react-icons/fa";
import PrivateRoute from "../pages/auth/PrivateRoute";

const AppLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navigate = useNavigate();
  const userRole = localStorage.getItem("userRole");
  const userImage = localStorage.getItem("imageUser")

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
      <div className=" min-h-screen flex bg-gray-100">
        <div
          className={`fixed inset-y-0 left-0 md:w-80 bg-[#F0E7D4] sm:w-64 text-white transform transition-transform z-50 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:static md:translate-x-0 md:w-80`}
        >
          <div className="p-5 text-center text-3xl md:text-5xl text-[#207137] font-semibold border-b border-gray-700">
            KSH
          </div>
          <nav className="mt-4 ">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block text-xl md:text-2xl font-bold py-4 md:py-6 px-4 flex items-center ${
                  isActive ? "bg-green-800 text-white" : "text-[#474747] hover:bg-[#207137] hover:text-white"
                }`
              }
              onClick={closeSidebar}
            >
              <img 
                src="https://res.cloudinary.com/dq5usncvp/image/upload/v1727161249/resident_5e1d62f6a2.png"
                alt="Residents"
                className="h-16 w-15 md:w-17 mr-6"
              />
              Residents
            </NavLink>
            {(userRole === 'Authenticated' || userRole === 'Public') && (
              <NavLink
                to="/program"
                className={({ isActive }) =>
                  `block text-xl md:text-2xl font-bold py-4 md:py-6 px-4 flex items-center ${
                    isActive ? "bg-green-800 text-white" : "text-[#474747] hover:bg-green-800 hover:text-white"
                  }`
                }
                onClick={closeSidebar}
              >
                <img
                  src="https://res.cloudinary.com/dq5usncvp/image/upload/v1727161303/program_30abe0df07.png"
                  alt="Programs"
                  className="h-16 w-15 md:w-18 mr-6"
                />
                Programs
              </NavLink>
            )}
            {(userRole === 'Authenticated' || userRole === 'Public') && (
              <NavLink
                to="/assesment"
                className={({ isActive }) =>
                  `block text-xl md:text-2xl font-bold py-4 md:py-6 px-4 flex items-center ${
                    isActive ? "bg-green-800 text-white" : "text-[#474747] hover:bg-green-800 hover:text-white"
                  }`
                }
                onClick={closeSidebar}
              >
                <img
                  src="https://res.cloudinary.com/dq5usncvp/image/upload/v1727161358/assesment_c4fef152b9.png"
                  alt="Assessment"
                  className="h-17 w-20 mr-10"
                />
                Assessment
              </NavLink>
            )}
            {(userRole === 'Authenticated' || userRole === 'Public') && (
              <NavLink
                to="/reporting"
                className={({ isActive }) =>
                  `block text-xl md:text-2xl font-bold py-4 md:py-6 px-4 flex items-center ${
                    isActive ? "bg-green-800 text-white" : "text-[#474747] hover:bg-green-800 hover:text-white"
                  }`
                }
                onClick={closeSidebar}
              >
                <img
                  src="https://res.cloudinary.com/dq5usncvp/image/upload/v1727161401/report_c223b65a45.png"
                  alt="Reporting"
                  className="h-17 w-20 mr-10"
                />
                Reporting
              </NavLink>
            )}
            {(userRole === 'Authenticated' || userRole === 'Public') && (
              <NavLink
                to="/medical"
                className={({ isActive }) =>
                  `block text-xl md:text-2xl font-bold py-4 md:py-6 px-4 flex items-center ${
                    isActive ? "bg-green-800 text-white" : "text-[#474747] hover:bg-green-800 hover:text-white"
                  }`
                }
                onClick={closeSidebar}
              >
                <img
                  src="https://res.cloudinary.com/dq5usncvp/image/upload/v1727161444/medicals_9b9bc63944.png"
                  alt="Medical"
                  className="h-17 w-20 mr-10"
                />
                Medical
              </NavLink>
            )}
          </nav>
        </div>

        <div className={`flex-1 flex flex-col ${isSidebarOpen ? "overflow-hidden" : ""} flex-1 flex-col overflow-y-auto overflow-x-hidden`}>
          <header className="flex items-center justify-between p-4 bg-white shadow-md">
            <div className="justify-center">
              <img
                src="https://res.cloudinary.com/dq5usncvp/image/upload/v1727160393/photo_2024_09_24_13_43_19_74e3099b67.jpg"
                alt="Logo"
                className="h-11 w-11 md:h-14 md:w-14 rounded-full"
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
              <div className="bg-gray-400 text-white h-11 w-11 md:h-14 md:w-14 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
                <img src={userImage} className="h-11 w-11 md:h-14 md:w-14 rounded-full" />
              </div>
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
};

export default AppLayout;
