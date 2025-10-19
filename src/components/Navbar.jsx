import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white px-8 py-4 flex justify-between items-center shadow-lg">
      <Link to="/" className="text-xl font-bold text-purple-400">
        🎬 MovieDB
      </Link>
      <div className="space-x-6">
        <Link
          to="/"
          className="hover:text-purple-400 transition duration-300"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="hover:text-purple-400 transition duration-300"
        >
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
