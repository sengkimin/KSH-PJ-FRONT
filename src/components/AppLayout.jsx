import "../App.css";
import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { FaUser, FaBars } from "react-icons/fa";
import PrivateRoute from "../pages/auth/PrivateRoute";

const AppLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navigate = useNavigate();
  const userRole = localStorage.getItem("userRole");

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
      <div className="relative bg-gray-100 h-full flex">
        <div
          className={`fixed inset-y-0 left-0 md:w-80 bg-[#F0E7D4] sm:w-64 text-white transform transition-transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:static md:translate-x-0 md:w-80`}
        >
          <div className="p-5 text-center text-3xl md:text-5xl text-[#207137] font-semibold border-b border-gray-700">
            KSH
          </div>
          <nav className="mt-4">
            <Link
              to="/"
              className="block text-xl md:text-2xl font-bold text-[#474747] py-4 md:py-6 px-4 hover:bg-[#207137]  hover:text-white flex items-center"
              onClick={closeSidebar}
            >
              <img 
              src="/resident.png"
              alt="Residents"
              className="h-16 w-15 md:w-17 mr-6" />

              Residents
            </Link>
            {(userRole === 'Authenticated' || userRole === 'Public') && (
              <Link
                to="/program"
                className="block text-xl  md:text-2xl font-bold text-[#474747] py-4 md:py-6 px-4 hover:bg-green-800 hover:text-white flex items-center"
                onClick={closeSidebar}
              >
                   <img 
              src="/program.png"
              alt="Programs"
              className="h-16 w-15 md:w-18 mr-6" />
                Programs
              </Link>
            )}
            {(userRole === 'Authenticated' || userRole === 'Public') && (
              <Link
                to="/assesment"
                className="block text-xl  md:text-2xl font-bold text-[#474747] py-4 md:py-6 px-4 hover:bg-green-800 hover:text-white flex items-center"
                onClick={closeSidebar}
              >
                   <img 
              src="/assesment.png"
              alt="Assesment"
              className="h-17 w-20 mr-10" />
                Assessment
              </Link>
            )}
            {(userRole === 'Authenticated'|| userRole === 'Public') && (
              <Link
                to="/reporting"
                className="block text-xl  md:text-2xl font-bold text-[#474747] py-4  md:py-6 px-4 hover:bg-green-800 hover:text-white flex items-center"
                onClick={closeSidebar}
              >
               <img 
              src="/report.png"
              alt="Reporting"
              className="h-17 w-20 mr-10" />
                Reporting
              </Link>
            )}
            {(userRole === 'Authenticated' || userRole === 'Public') && (
              <Link
                to="/medical"
                className="block text-xl  md:text-2xl font-bold text-[#474747] py-4 md:py-6 px-4 hover:bg-green-800 hover:text-white flex items-center"
                onClick={closeSidebar}
              >
                   <img 
              src="/medicals.png"
              alt="Medical"
              className="h-17 w-20 mr-10" />
                Medical
              </Link>
            )}
          </nav>
        </div>

        <div className={`flex-1 flex flex-col ${isSidebarOpen ? "overflow-hidden" : ""}`}>
          <header className="flex items-center justify-between p-4 bg-white shadow-md">
            <div className="justify-center">
              <img
                src="/khslogo.jpg"
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
};

export default AppLayout;
