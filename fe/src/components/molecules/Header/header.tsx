import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import DropdownMenu from "../dropDown/dropDown";

const Header: React.FC = () => {
  const [user, setUser] = useState<any | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getUserDataFromCookie = () => {
      const cookieData = document.cookie
        .split("; ")
        .find((row) => row.startsWith("userData="));

      if (cookieData) {
        const userDataString = cookieData.split("=")[1];
        try {
          const userData = JSON.parse(decodeURIComponent(userDataString));
          return userData;
        } catch (error) {
          console.error("Error parsing JSON from cookie:", error);
          return null;
        }
      } else {
        return null;
      }
    };

    const userData = getUserDataFromCookie();
    setUser(userData);
  }, []);

  const handleLogout = () => {
    const now = new Date();

    const expiresDate = new Date(now.getTime() + 24 * 60 * 60 * 100);

    const expiresUTC = expiresDate.toUTCString();
    document.cookie = `userData=; expires=${expiresUTC}; path=/;`;

    setUser(null);
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <header className="flex justify-between items-center py-4 px-8 bg-gray-800 text-white">
      <div>
        <Link to="/">
          <h1 className="text-2xl font-bold text-white">
            Ryan<span className="text-gray-500">Blogs</span>
          </h1>
        </Link>
      </div>
      <nav className="text-lg text-white flex gap-8 font-bold">
        <Link to="/" className="hover:text-gray-500 transition-all">
          <h1>Home</h1>
        </Link>
        <Link to="/blog" className="hover:text-gray-500 transition-all">
          <h1>Blogs</h1>
        </Link>
        <Link to="/contact" className="hover:text-gray-500 transition-all">
          <h1>Contact</h1>
        </Link>
      </nav>
      <div>
        <DropdownMenu handleLogout={handleLogout} user={user} />
      </div>
    </header>
  );
};

export default Header;
