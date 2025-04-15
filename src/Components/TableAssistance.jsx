import React from "react";

const NeedAttentionTable = () => {
  return (
    <div className="bg-white rounded-xl shadow px-8 py-6 w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Need Attention</h2>
        <button className="bg-blue-500 text-white px-4 py-2 text-sm font-medium rounded-md hover:bg-blue-600">
          + Add New
        </button>
      </div>

      {/* Table */}
      <table className="w-full">
        <thead className="bg-gray-100">
          <tr className="text-sm text-gray-500 border-b border-gray-200">
            <th className="py-2 font-medium text-center w-[25%]">Asset Code</th>
            <th className="py-2 font-medium text-center w-[25%]">Department</th>
            <th className="py-2 font-medium text-center w-[25%]">Service</th>
            <th className="py-2 font-medium text-center w-[25%]">Status</th>
          </tr>
        </thead>
        <tbody className="text-sm text-gray-700">
          {/* Row 1 */}
          <tr className="border-b last:border-b-0">
            <td className="py-3 text-center">MED-1234</td>
            <td className="py-3 text-center">Cardiology</td>
            <td className="py-3 text-center">Maintenance</td>
            <td className="py-3 text-center">
              <span className="px-1 py-1 text-sm font-medium text-red-600 bg-red-100 rounded-full">
                Urgent
              </span>
            </td>
          </tr>
          {/* Row 2 */}
          <tr className="border-b last:border-b-0">
            <td className="py-3 text-center">MED-2356</td>
            <td className="py-3 text-center">Radiology</td>
            <td className="py-3 text-center">Repair</td>
            <td className="py-3 text-center">
              <span className="px-3 py-1 text-sm font-medium text-orange-600 bg-orange-100 rounded-full">
                High
              </span>
            </td>
          </tr>
          {/* Row 3 */}
          <tr className="border-b last:border-b-0">
            <td className="py-3 text-center">MED-7890</td>
            <td className="py-3 text-center">Laboratory</td>
            <td className="py-3 text-center">Calibration</td>
            <td className="py-3 text-center">
              <span className="px-3 py-1 text-sm font-medium text-yellow-600 bg-yellow-100 rounded-full">
                Medium
              </span>
            </td>
          </tr>
          {/* Row 4 */}
          <tr className="border-b last:border-b-0">
            <td className="py-3 text-center">MED-4567</td>
            <td className="py-3 text-center">Emergency</td>
            <td className="py-3 text-center">Replacement</td>
            <td className="py-3 text-center">
              <span className="px-3 py-1 text-sm font-medium text-green-600 bg-green-100 rounded-full">
                Low
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default NeedAttentionTable;
