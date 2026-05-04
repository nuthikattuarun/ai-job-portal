import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export default function Navbar() {
  const [dark, setDark] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleTheme = () => {
    setDark(!dark);
    document.documentElement.classList.toggle("dark");
  };

  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    navigate("/login");
  };

  const username = localStorage.getItem("username");
  const isLoggedIn = localStorage.getItem("access");
  

  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center px-6 py-4 bg-black/20 backdrop-blur-md">

      {/* LEFT SIDE */}
      <div className="flex items-center space-x-3">
        <Link to="/">
          <h1 className="text-xl font-bold text-white">AI Career</h1>
        </Link>
      </div>

      {/* CENTER NAV */}
      <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
        <Link
          to="/"
          className={isActive("/") ? "text-purple-400" : "text-gray-300 hover:text-purple-400"}
        >
          Home
        </Link>

        <Link
          to="/dashboard"
          className={isActive("/dashboard") ? "text-purple-400" : "text-gray-300 hover:text-purple-400"}
        >
          Dashboard
        </Link>
      </div>

      {/* RIGHT SIDE */}
<div className="flex items-center gap-2">
  <span className="text-white text-sm">
    Hi {username}
  </span>

        {/* 🌙 Dark Mode */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg bg-white/10 hover:bg-white/20"
        >
          {dark ? <FiSun size={18} /> : <FiMoon size={18} />}
        </button>

        {/* 🔐 Auth Buttons */}
        {isLoggedIn ? (
         
  <button
    onClick={handleLogout}
    className="bg-red-500 text-white px-4 py-2 rounded-lg"
  >
    Logout
  </button>
        ) : (
          <>
            <Link
              to="/login"
              className="px-4 py-2 text-sm text-gray-300 border border-white/20 rounded-lg"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="px-4 py-2 text-sm font-semibold rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
            >
              Sign Up
            </Link>
          </>
        )}
      </div>

    </nav>
  );
}
