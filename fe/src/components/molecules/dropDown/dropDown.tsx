import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const DropdownMenu = ({ user, handleLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <div className="flex items-center">
        {user && <p className="mr-2">{user.name}</p>}
        <button
          onClick={toggleDropdown}
          className="bg-gray-500 hover:bg-gray-600 transition-all text-white font-bold py-2 px-4 rounded flex justify-center items-center"
        >
          Account
        </button>
        {/* {user.image === null ? } */}
      </div>
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 bg-white border border-gray-300 rounded shadow-lg">
          {user ? (
            <button
              onClick={handleLogout}
              className="block w-full text-left py-2 px-4 text-gray-800 hover:bg-gray-200"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="block w-full text-left py-2 px-4 text-gray-800 hover:bg-gray-200"
            >
              Login
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
