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
      <div className="bg-gray-100 h-screen flex">
        <div className="w-64 bg-gray-800 text-white flex-shrink-0">
          <div className="p-4 text-center text-2xl font-semibold border-b border-gray-700">
            WMAD
          </div>
          <nav className="mt-4">
            <Link to="/" className="block py-2.5 px-4 hover:bg-gray-700">
              Dashboard
            </Link>
            <Link
              to="/user-account"
              className="block py-2.5 px-4 hover:bg-gray-700"
            >
              User Account
            </Link>
            <Link
              to="/book-catalog"
              className="block py-2.5 px-4 hover:bg-gray-700"
            >
              Book Catalog
            </Link>
            <Link
              to="/book-issue"
              className="block py-2.5 px-4 hover:bg-gray-700"
            >
              Book Issue
            </Link>
            <Link to="/member" className="block py-2.5 px-4 hover:bg-gray-700">
              Member
            </Link>
          </nav>
        </div>

        <div className="flex-1 flex flex-col">
          <header className="flex items-center justify-between p-4 bg-white shadow-md">
            <div className="text-xl font-medium">LMS</div>
            <div className="flex items-center space-x-4">
              <div className="text-gray-700">Admin</div>
              <button className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
                <FaUser className="w-4 h-4" />
              </button>
              <button
                onClick={handleLogOut}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Log Out
              </button>
            </div>
          </header>

          <main className="flex-1 p-6">
            <Outlet context={{}} />
          </main>
        </div>
      </div>
    </PrivateRoute>
  );
}

export default AppLayout;
