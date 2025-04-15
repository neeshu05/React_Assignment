import React from "react";
import {
  FaChartBar,
  FaTimesCircle,
  FaTrash,
  FaSitemap
} from "react-icons/fa";

const StatsCards = () => {
  const statsDetails = [
    {
      label: "Assets",
      value: 487,
      icon: <FaChartBar size={20} />,
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      label: "Not Working",
      value: 24,
      icon: <FaTimesCircle size={20} />,
      bgColor: "bg-red-50",
      iconColor: "text-red-600"
    },
    {
      label: "Discarded",
      value: 18,
      icon: <FaTrash size={20} />,
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600"
    },
    {
      label: "Department",
      value: 12,
      icon: <FaSitemap size={20} />,
      bgColor: "bg-green-50",
      iconColor: "text-green-600"
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4">
      {statsDetails.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-sm p-4 flex items-center space-x-4 h-28"
        >
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center ${item.bgColor} ${item.iconColor}`}
          >
            {item.icon}
          </div>
          <div className="flex-1">
            <p className="text-sm text-gray-500">{item.label}</p>
            <p className="text-xl font-bold text-gray-800">{item.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
