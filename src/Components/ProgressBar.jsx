import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import classNames from "classnames";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    ResponsiveContainer,
    Tooltip,
} from "recharts";

// Dummy Data
const barData = [
    { name: "Jan", value: 200 },
    { name: "Feb", value: 150 },
    { name: "Mar", value: 300 },
    { name: "Apr", value: 250 },
    { name: "May", value: 400 },
    { name: "Jun", value: 350 },
];

// Dummy Data
const progressData = [
    { label: "Open", value: 48, count: 24, color: "#43C6AC" , bgColor:'#F0FFF4'},
    { label: "Closed", value: 36, count: 18, color: "#FF6B6B", bgColor:'#FFF5F5' },
    { label: "Expenditure", value: 45, count: "₹45K", color: "#5955FF", bgColor:'#EFF6FF' },
];

const FilterButton = ({ label, active }) => {
    const buttonClass = classNames(
        'text-sm px-3 py-1 rounded-md transition-all',
        {
            'bg-white text-gray-700 font-semibold shadow-md hover:bg-gray-200': active,
            'text-gray-500 hover:bg-gray-100': !active,
        }
    );
    return (
        <button className={buttonClass}>
            {label}
        </button>
    );
};

const IncidentCard = ({ label }) => {
    return (
        <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1">
                    <h2 className="text-xl font-bold text-gray-800">{label}</h2>
                    <span> <RiArrowDropDownLine size={28} /> </span>
                </div>
                <button className="bg-blue-50 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-100">
                    Add New
                </button>
            </div>

            <div className="flex flex-col md:flex-row gap-6 m-1">
                <div className="flex flex-col gap-4 w-full md:w-1/4 h-full">
                    {progressData.map((item) => (
                        <div
                            key={item.label}
                            style={{ backgroundColor: `${item.bgColor}` }}
                            className="flex flex-col items-center gap-4 shadow-sm rounded-lg p-1 border border-gray-100"
                        >
                            <div className="flex flex-row justify-between items-center w-full">
                                <p className="text-gray-600 text-sm">{item.label}</p>
                                <p className="font-bold text-lg text-gray-800">{item.count}</p>
                            </div>

                            <div className="flex-shrink-0 pb-2">
                                <CircularProgressbar
                                    value={item.value}
                                    text={`${item.value}%`}
                                    styles={buildStyles({
                                        pathColor: item.color,
                                        textColor: item.color,
                                        trailColor: "#eee",
                                    })}
                                    className="w-14 h-14 mb-1"
                                />
                            </div>

                        </div>
                    ))}
                </div>

                <div className="w-full md:w-3/4 bg-white rounded-lg shadow-sm border border-gray-100 p-4">
                    <div className="flex items-center gap-4 mb-6 bg-gray-100 w-auto rounded-lg p-2">
                        {['Day', 'Month', 'Year'].map((label) => (
                            <FilterButton
                                key={label}
                                label={label}
                                active={'Day' === label}
                            />
                        ))}
                    </div>
                    <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={barData}>
                                <defs>
                                    <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#ffffff" stopOpacity={0} />
                                        <stop offset="100%" stopColor="#60a5fa" stopOpacity={1} />
                                    </linearGradient>
                                </defs>
                                <XAxis dataKey="name" stroke="#A0AEC0" />
                                <YAxis stroke="#A0AEC0" />
                                <Tooltip />
                                <Bar dataKey="value" fill="url(#blueGradient)" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IncidentCard;
