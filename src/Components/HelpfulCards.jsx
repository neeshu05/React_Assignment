import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { SlCalender } from "react-icons/sl";

const WarrantyStatusCard = ({label, data}) => {
    const WARRANTY_DATA = data || []
    return (
    <div className="bg-white rounded-lg p-4 shadow h-full">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">{label}</h2>
        <div className="flex items-center gap-2">
            <div>
                <SlCalender className="text-gray-500" size={16} />    
            </div>
            <div className="text-sm text-gray-500">Mar 2025</div>
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-6">
        <div className="w-full h-64">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={WARRANTY_DATA}
                dataKey="value"
                nameKey="name"
                innerRadius="50%"
                outerRadius="80%"
                cx="50%"
                cy="50%"
              >
                {WARRANTY_DATA.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-3 gap-4 min-h-[120px]">
          {WARRANTY_DATA.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center rounded-lg p-4"
              style={{
                backgroundColor: `${item.color}10` // Light tint background using hex color
              }}
            >
              <span
                className="font-bold text-xl"
                style={{ color: item.color }}
              >
                {item.value}%
              </span>
              <span className="text-sm text-gray-600">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WarrantyStatusCard;
