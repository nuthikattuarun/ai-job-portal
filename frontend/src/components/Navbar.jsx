import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export default function Navbar() {
  const [dark, setDark] = useState(true);
  const location = useLocation();

  const toggleTheme = () => {
    setDark(!dark);
    document.documentElement.classList.toggle("dark");
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center px-6 md:px-12 py-4 bg-white/5 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/10">
      
      {/* LEFT SIDE (Dark Mode + Logo) */}
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg bg-white/10 hover:bg-white/20 hover:shadow-lg hover:shadow-purple-500/10 transition duration-300"
        >
          {dark ? <FiSun size={20} /> : <FiMoon size={20} />}
        </button>

        <Link to="/" className="group">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:opacity-80 transition duration-300">
            AI Career
          </h1>
        </Link>
      </div>

      {/* CENTER NAV */}
      <div className="hidden md:flex items-center space-x-8">
        <Link
          to="/"
          className={`text-sm font-medium transition duration-300 ${
            isActive("/")
              ? "text-purple-400"
              : "text-gray-300 hover:text-purple-400"
          }`}
        >
          Home
        </Link>
        <Link
          to="/job-details"
          className={`text-sm font-medium transition duration-300 ${
            isActive("/job-details")
              ? "text-purple-400"
              : "text-gray-300 hover:text-purple-400"
          }`}
        >
          Jobs
        </Link>
        <Link
          to="/dashboard"
          className={`text-sm font-medium transition duration-300 ${
            isActive("/dashboard")
              ? "text-purple-400"
              : "text-gray-300 hover:text-purple-400"
          }`}
        >
          Dashboard
        </Link>
      </div>

      {/* RIGHT SIDE BUTTONS */}
      <div className="hidden md:flex items-center space-x-3">
        <Link
          to="/login"
          className="px-5 py-2 text-sm font-medium text-gray-300 border border-white/20 rounded-lg hover:border-white/40 hover:bg-white/5 hover:text-white transition duration-300"
        >
          Login
        </Link>

        <Link
          to="/signup"
          className="px-5 py-2 text-sm font-semibold rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-purple-600 hover:to-indigo-600 text-white shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition duration-300 hover:scale-105"
        >
          Sign Up
        </Link>
      </div>

      {/* MOBILE MENU (simplified for now) */}
      <div className="md:hidden flex items-center space-x-3">
        <Link
          to="/login"
          className="px-3 py-2 text-sm font-medium rounded-lg border border-white/20 hover:bg-white/5 transition duration-300"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="px-3 py-2 text-sm font-semibold rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:shadow-lg hover:shadow-purple-500/50 transition duration-300"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
}
