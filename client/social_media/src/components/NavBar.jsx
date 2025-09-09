import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo1 from "../assets/Logo.png";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
  
    
    navigate("/");
  };

  return (
    <nav className="w-full h-[70px] backdrop-blur-lg bg-white/5 border-b border-white/10 shadow-lg flex items-center justify-between px-6 fixed top-0 z-50">
      {/* Logo */}
      <Link to="/home" className="flex items-center gap-2">
        <img
          src={logo1}
          alt="logo"
          className="w-[40px] rounded-full border border-cyan-400 shadow-md hover:scale-105 transition-transform duration-300"
        />
        <h1 className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          SocialMedia
        </h1>
      </Link>

      {/* Search Bar */}
      <div className="hidden md:flex items-center w-[40%] h-[40px] border border-white/20 rounded-xl px-3 bg-white/10 focus-within:border-cyan-400/40 focus-within:ring-1 focus-within:ring-cyan-400/40 transition-all duration-300">
        <input
          type="text"
          placeholder="🔍 Search..."
          className="w-full bg-transparent outline-none text-sm text-gray-200 placeholder-gray-400"
        />
      </div>

      {/* Navigation Links + Profile + Logout */}
      <div className="flex items-center gap-6">
        <Link
          to="/home"
          className="text-sm font-semibold text-gray-300 hover:text-cyan-400 transition"
        >
          Home
        </Link>
        <Link
          to="/explore"
          className="text-sm font-semibold text-gray-300 hover:text-purple-400 transition"
        >
          Explore
        </Link>
        <Link
          to="/messages"
          className="text-sm font-semibold text-gray-300 hover:text-pink-400 transition"
        >
          Messages
        </Link>
=
        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 hover:from-cyan-600 hover:via-purple-700 hover:to-pink-600 px-4 py-1.5 rounded-lg text-white text-sm font-semibold shadow-md hover:shadow-cyan-500/40 transition-all duration-300"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
