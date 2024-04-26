import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center py-4 px-8 bg-gray-800 text-white">
      <div>
        <Link to="/">
          <h1 className="text-2xl font-bold text-white">
            Ryan<span className="text-red-700">Blogs</span>
          </h1>
        </Link>
      </div>
      <nav className="text-lg flex gap-4">
        <Link to="/blogs">
          <h1>Blogs</h1>
        </Link>
        <Link to="/contact">
          <h1>Contact</h1>
        </Link>
      </nav>
      <div className="flex">
        <Link
          to="/login"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex justify-center items-center"
        >
          Login
        </Link>
      </div>
    </header>
  );
};

export default Header;
