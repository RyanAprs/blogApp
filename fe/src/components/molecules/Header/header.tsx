import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center py-4 px-8 bg-gray-800 text-white">
      <div>
        <Link to="/">
          <h1>RyanBlogs</h1>
        </Link>
      </div>
      <nav>
        <Link to="/blogs">
          <h1>Blogs</h1>
        </Link>
      </nav>
      <div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Login
        </button>
      </div>
    </header>
  );
};

export default Header;
