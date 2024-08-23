import "../App.css";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import PrivateRoute from "../pages/auth/PrivateRoute";

function AppLayout() {
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <PrivateRoute>
      <div className="bg-gray-100 h-auto flex">
        <div className="w-80 bg-orange-100 text-white flex-shrink-0">
          <div className="p-5 text-center text-2xl text-green-700 font-semibold border-b border-gray-700">
            KSH
          </div>
          <nav className="mt-4">
            <Link to="/" className="block text-xl font-bold text-black py-4 px-4  hover:bg-green-800 hover:text-white">
              Dashboard
            </Link>
            <Link
              to="/user-account"
              className="block text-xl font-bold  text-black py-4 px-4  hover:bg-green-800 hover:text-white"
            >
              Reseidents List
            </Link>
            <Link
              to="/book-catalog"
              className="block text-xl font-bold  text-black py-4 px-4  hover:bg-green-800 hover:text-white"
            >
              Programs
            </Link>
            <Link
              to="/book-issue"
              className="block text-xl font-bold text-black py-4  px-4  hover:bg-green-800 hover:text-white"
            >
              Assesment
            </Link>
            <Link to="/member" className="block text-xl font-bold text-black py-4 px-4 hover:bg-green-800 hover:text-white">
             Reporting
            </Link>
          </nav>
        </div>

        <div className="flex-1 flex flex-col">
          <header className="flex items-center justify-between p-4 bg-white shadow-md">
          <div className="justify-center">
          <img
            src="khslogo.jpg"
            alt="Logo"
            className="h-10 w-10 rounded-full"
          />
        </div>
            <div className="flex items-center space-x-4">
              {/* <div className="text-gray-700">Admin</div> */}
              <button className="bg-gray-400 text-white p-3 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
                <FaUser className="w-4 h-4" />
              </button>
              <button
                onClick={handleLogOut}
                className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-800"
              >
                Log Out
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
