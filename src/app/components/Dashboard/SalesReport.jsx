import React, { useState } from "react";

export default function SalesReport() {
  const [filter, setFilter] = useState("daily");

  const chartData = {
    daily: {
      series: [
        { name: "Earnings", data: [14, 16.4, 15, 18, 16, 17, 16.4] },
        { name: "Orders", data: [20, 22.6, 21, 23, 22, 21.5, 22.6] }
      ],
      categories: [
        "10 Mar", "11 Mar", "12 Mar", "13 Mar", "14 Mar", "15 Mar", "16 Mar"
      ]
    },
    monthly: {
      series: [
        { name: "Earnings", data: [120, 130, 110, 150, 140, 160] },
        { name: "Orders", data: [200, 210, 180, 230, 220, 240] }
      ],
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
    },
    yearly: {
      series: [
        { name: "Earnings", data: [1500, 1600, 1700, 1650, 1800] },
        { name: "Orders", data: [2500, 2600, 2700, 2650, 2800] }
      ],
      categories: ["2019", "2020", "2021", "2022", "2023"]
    }
  };

  const chartOptions = {
    chart: {
      type: "line",
      height: 300,
      toolbar: { show: false }
    },
    stroke: { curve: "smooth", width: 3 },
    colors: ["#4F46E5", "#F59E0B"], 
    dataLabels: { enabled: false },
    grid: { strokeDashArray: 4 },
    xaxis: {
      categories: chartData[filter].categories,
      labels: { style: { colors: "#6B7280" } }
    },
    yaxis: {
      labels: { style: { colors: "#6B7280" } }
    },
    legend: {
      position: "top",
      horizontalAlign: "right"
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-300">
     
      <div className="flex items-center justify-between mb-6">
        <div className="text-lg font-semibold">Sales Report</div>
        <div className="flex">
          {["daily", "monthly", "yearly"].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-3 border border-gray-200 py-1 ${
                filter === type ? "bg-gray-300 text-black" : "bg-white"
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="">
         <img src='/long.png' alt="Brand" className="w-full h-full object-contain" />
      </div>

    </div>
  );
}
