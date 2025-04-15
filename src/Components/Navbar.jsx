import React from "react";
import { FaCaretDown, FaTh, FaBell, FaHome } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-white shadow flex items-center justify-between px-6 py-4">
      <div className="flex items-center space-x-3">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <div className="w-[3px] h-6 bg-yellow-500 rounded" />
      </div>

      <div className="flex items-center space-x-4">
        <div className="bg-gray-100 flex items-center px-4 py-2 rounded-full space-x-2">
          <span className="text-sm text-gray-700 font-medium">
            Nova Bio Medical
          </span>
        </div>

        <div className="bg-gray-100 flex items-center px-4 py-2 rounded-full space-x-2">
          <FaCaretDown className="text-gray-600" />
          <span className="text-sm text-gray-700 font-medium">Vijayragav</span>
        </div>

        {/* Icon buttons */}
        <button className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 focus:outline-none">
          <FaTh size={16} />
        </button>
        <button className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 focus:outline-none">
          <FaBell size={16} />
        </button>
        <button className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 focus:outline-none">
          <FaHome size={16} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
