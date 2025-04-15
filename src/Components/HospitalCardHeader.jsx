import React from "react";
import { MdLocalHospital } from "react-icons/md";

const HospitalServiceCard = ({price,label}) => {
    return (
        <div>
            <p className="text-lg font-semibold">{price}</p>
            <p className="text-sm">{label}</p>
        </div>
    )
}


const HospitalServiceCardData = [
    {
        price: "487",
        label: "Assets"
    },
    {
        price: "24",
        label: "Services"
    },
    {
        price: "99.9%",
        label: "Uptime"
    }
]

const HospitalCard = () => {
  return (
    <div className="bg-white w-full mt-4 rounded-xl shadow flex flex-row justify-between items-start md:items-center px-8 py-6 gap-6">
      <div className="flex flex-col gap-4 max-w-xl">
        {/* Header */}
        <div className="flex items-center gap-3">
          <div className="bg-blue-100 p-3 rounded-full">
            <MdLocalHospital className="text-blue-600 w-6 h-6" />
          </div>

          <div className="flex flex-col w-350">
            <h2 className="text-lg font-semibold">City General Hospital</h2>
            <div className="flex gap-3 text-sm text-gray-500 w-full">
              <span className="text-green-500">● Online</span>
              <span>Last updated 2 mins</span>
            </div>
          </div>

          {/* Status Badge */}
          <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 w-30 rounded-full font-small text-center">
            <span className="text-blue-600 font-semibold">Active</span>
            <span className="text-blue-600"> Client</span>
          </span>
        </div>

        {/* Contract Value */}
        <div className="flex flex-col items-center my-2">
          <p className="text-sm text-gray-500 my-2">Annual Contract Value</p>
          <p className="text-2xl font-bold">₹2,50,00,000</p>
        </div>

        {/* Stats (Assets, Services, Uptime) */}
        
      </div>

      {/* Right Section */}
      <div className="flex flex-col items-start md:items-center gap-6">
        {/* KPIs */}
        <div className="flex gap-4">
          {/* Performance */}
          <div className="bg-blue-50 px-4 py-3 rounded-xl text-center min-w-[100px]">
            <p className="text-sm text-blue-600">Performance</p>
            <p className="text-xl font-semibold text-blue-800">98.5%</p>
            <div className="h-1 bg-blue-400 mt-1 rounded-full w-full" />
          </div>

          {/* Satisfaction */}
          <div className="bg-green-50 px-4 py-3 rounded-xl text-center min-w-[100px]">
            <p className="text-sm text-green-600">Satisfaction</p>
            <p className="text-xl font-semibold text-green-800">4.8/5</p>
            <div className="flex justify-center mt-1 gap-1">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className="w-2 h-2 rounded-full bg-green-500"
                />
              ))}
            </div>
          </div>

          {/* Asset Utilization */}
          <div className="bg-purple-50 px-4 py-3 rounded-xl text-center min-w-[100px]">
            <p className="text-sm text-purple-600">Asset Utilization</p>
            <p className="text-xl font-semibold text-purple-800">95.3%</p>
            <div className="flex justify-center mt-1 gap-1">
              {[...Array(5)].map((_, i) => {
                // For example, 4 filled circles and 1 gray
                const fillColor = i < 4 ? "bg-purple-500" : "bg-gray-300";
                return <span key={i} className={`w-2 h-2 rounded-full ${fillColor}`} />;
              })}
            </div>
          </div>
        </div>


        <div className="flex justify-evenly text-gray-700 mt-2 gap-3 w-full">
            {
                HospitalServiceCardData.map((item, index) => (
                    <HospitalServiceCard key={index} price={item.price} label={item.label} />
                ))
            }
        </div>
        </div>

    
        <div className="flex-shrink-0 w-full md:w-auto flex flex-col items-center justify-center gap-4">
         <button className="rounded-xl bg-blue-600 text-white px-6 py-3 hover:bg-blue-700 focus:outline-none">
           Generate Report
         </button>
         <div className="bg-gradient-to-tr from-blue-400 to-blue-100 text-blue-700 w-full md:w-48 h-32 rounded-lg flex items-center justify-center text-center">
           <p className="text-sm font-semibold px-2">
             XXXXXXXX <br /> XXXXXXXX
           </p>
         </div>
       </div>
      </div>
  );
};

export default HospitalCard;
