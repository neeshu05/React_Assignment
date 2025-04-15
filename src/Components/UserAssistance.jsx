import React from "react";
import { FaBox } from "react-icons/fa";

const UserAssitanceCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 h-full">
      <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col justify-between items-center h-full">
        <div>
          <h2 className="text-gray-800 font-semibold text-center">Cumulative Downtime</h2>
          <p className="text-sm text-gray-400 mt-1">
            Time weighted data for downtime
          </p>
        </div>
        <div className="flex items-center gap-4 my-4">
          <p className="text-3xl font-mono text-gray-800">17:45:30</p>
        </div>
      </div>

      {/* Card 2: User Asset Tracking 2.0 */}
      <div className="bg-white p-4 rounded-lg shadow-sm max-w-md mx-auto">
      {/* Card Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-blue-50 text-blue-600 p-2 rounded-full">
            <FaBox size={20} />
          </div>
          <div>
            <h3 className="text-gray-800 font-semibold">
              User Asset Tracking 2.0
            </h3>
            <p className="text-sm text-gray-500">
              Update tracking for monitoring and maintenance
            </p>
          </div>
        </div>
        <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full font-medium">
          New
        </span>
      </div>

      <div className="flex items-center justify-between my-4">
        <div className="flex -space-x-3">
          <div className="w-8 h-8 rounded-full bg-pink-400 border-2 border-white flex items-center justify-center text-white text-xs">1</div>
          <div className="w-8 h-8 rounded-full bg-yellow-400 border-2 border-white flex items-center justify-center text-white text-xs">2</div>
          <div className="w-8 h-8 rounded-full bg-green-400 border-2 border-white flex items-center justify-center text-white text-xs">3</div>
          <div className="w-8 h-8 rounded-full bg-blue-400 border-2 border-white flex items-center justify-center text-white text-xs">
            +4
          </div>
        </div>

        <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          Learn More
        </button>
      </div>
    </div>

      {/* Card 3: Placeholder */}
      <div className="bg-white p-4 rounded-lg shadow-sm flex items-center w-full h-full">
        <div className="flex items-center gap-4">
          <div className="bg-blue-50 text-blue-600 p-2 rounded-full">
            <FaBox size={25} />
          </div>
          <p className="text-gray-800 font-semibold text-center">XXXXXXXXXXX</p>
        </div>
      </div>
    </div>
  );
};

export default UserAssitanceCards;
