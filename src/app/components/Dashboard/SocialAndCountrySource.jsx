import React from "react";

const EyeIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12c0 0 4.5-7.5 9.75-7.5S21.75 12 21.75 12s-4.5 7.5-9.75 7.5S2.25 12 2.25 12Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const socialData = [
  { icon: <svg className="w-5 h-5 text-pink-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2ZM12 7a5 5 0 1 0 0 10a5 5 0 0 0 0-10Zm6-1a1 1 0 1 0 0 2a1 1 0 0 0 0-2Z"/></svg>, name: "Instagram", views: "34.36k", revenue: "$5.17k", viewsUp: true, revenueUp: false },
  { icon: <svg className="w-5 h-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M22 12a10 10 0 1 0-11.56 9.87v-7H8v-3h2.44V9.5a3.5 3.5 0 0 1 3.76-3.86a15 15 0 0 1 2.23.2v2.46H15a1.4 1.4 0 0 0-1.57 1.51V12h2.67l-.43 3h-2.24v7A10 10 0 0 0 22 12Z"/></svg>, name: "Facebook", views: "24.62k", revenue: "$4.32k", viewsUp: true, revenueUp: true },
  { icon: <svg className="w-5 h-5 text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm1 15a4 4 0 0 1-4-4V8h2v5a2 2 0 0 0 4 0V8h2v5a4 4 0 0 1-4 4Z"/></svg>, name: "Tik Tok", views: "17.36k", revenue: "$3.47k", viewsUp: true, revenueUp: false },
  { icon: <svg className="w-5 h-5 text-sky-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M22 5.92a8.54 8.54 0 0 1-2.36.65A4.1 4.1 0 0 0 21.45 4a8.19 8.19 0 0 1-2.6 1A4.12 4.12 0 0 0 16.07 4a4.14 4.14 0 0 0-4.13 4.13a4.4 4.4 0 0 0 .11.94A11.74 11.74 0 0 1 3.1 4.89a4.14 4.14 0 0 0 1.28 5.52a4 4 0 0 1-1.87-.51v.05a4.14 4.14 0 0 0 3.31 4.06a4.1 4.1 0 0 1-1.86.07a4.14 4.14 0 0 0 3.86 2.86A8.27 8.27 0 0 1 2 19.54a11.68 11.68 0 0 0 6.29 1.84c7.55 0 11.67-6.26 11.67-11.68v-.53A8.18 8.18 0 0 0 22 5.92Z"/></svg>, name: "Twitter", views: "49.32k", revenue: "$1.26k", viewsUp: false, revenueUp: true },
  { icon: <svg className="w-5 h-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2ZM8 7l8.5 5L8 17Z"/></svg>, name: "Pinterest", views: "6.92k", revenue: "$926", viewsUp: true, revenueUp: true },
  { icon: <svg className="w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M21 4H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h3v2l3-2h12a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1ZM8 12.5A1.5 1.5 0 1 1 9.5 14A1.5 1.5 0 0 1 8 12.5Zm8 0A1.5 1.5 0 1 1 17.5 14A1.5 1.5 0 0 1 16 12.5Z"/></svg>, name: "Discord", views: "639", revenue: "$517", viewsUp: true, revenueUp: true },
  { icon: <svg className="w-5 h-5 text-red-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M21.8 8S21.4 6.4 20.6 5.6C19.6 4.6 18.4 4.6 17.9 4.5 15.1 4.3 12 4.3 12 4.3h-.1s-3.1 0-5.9.2C5.6 4.6 4.4 4.6 3.4 5.6 2.6 6.4 2.2 8 2.2 8S2 9.9 2 11.9v.2c0 2 .2 3.9.2 3.9s.4 1.6 1.2 2.4c1 1 2.3 1 2.9 1.1 2.1.2 8.7.2 8.7.2s3.1 0 5.9-.2c.5-.1 1.7-.1 2.7-1.1.8-.8 1.2-2.4 1.2-2.4s.2-1.9.2-3.9v-.2c0-2-.2-3.9-.2-3.9ZM9.8 14.5V9.5l5.2 2.5Z"/></svg>, name: "Youtube", views: "391", revenue: "$268", viewsUp: false, revenueUp: true },
];

const countryData = [
  {
    flag: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" className="w-6 h-4">
        <rect width="640" height="480" fill="#AA151B" />
        <rect y="160" width="640" height="160" fill="#F1BF00" />
      </svg>
    ),
    name: "Spain",
    metrics: [
      { icon: EyeIcon, value: "2.37k", up: true, color: "bg-green-100 text-green-600" },
      { value: "36.52k", up: false, color: "bg-red-100 text-red-600" },
    ],
  },
//   {
//     flag: (
//       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" className="w-6 h-4">
//         <path fill="#006" d="M0 0h640v480H0z"/>
//         <path fill="#fff" d="M0 0l320 240L0 480z"/>
//         <path fill="#fff" d="M640 0L320 240l320 240z"/>
//         <path fill="#c00" d="M0 0l320 240L0 480l240-240z"/>
//         <path fill="#c00" d="M640 0L320 240l320 240-240-240z"/>
//       </svg>
//     ),
//     name: "Australia",
//     metrics: [{ icon: EyeIcon, value: "8.65k", up: true,  }],
//   },
];

export default function SocialAndCountrySource() {
  return (
    <div className="space-y-6">
     
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-800">Social Source</h2>
          <button className="text-gray-400">•••</button>
        </div>
        <div className="text-3xl font-bold text-gray-800">
          135K <span className="text-green-500 text-base font-medium">+3.1%</span>
        </div>
        <p className="text-sm text-gray-500 mb-6">View in this month</p>

        <div className="space-y-4">
          {socialData.map((item, idx) => (
            <div key={idx} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {item.icon}
                <span className="text-gray-700 font-medium">{item.name}</span>
              </div>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-1 text-gray-600">
                  {EyeIcon}
                  <span>{item.views}</span>
                  <span className={item.viewsUp ? "text-green-500" : "text-red-500"}>
                    {item.viewsUp ? "↑" : "↓"}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-gray-600">
                  <span>{item.revenue}</span>
                  <span className={item.revenueUp ? "text-green-500" : "text-red-500"}>
                    {item.revenueUp ? "↑" : "↓"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

     
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-800">Country Source</h2>
          <a href="#" className="text-sm text-blue-500 hover:underline">
            View All
          </a>
        </div>
        <div className="text-3xl font-bold text-gray-800">
          93 <span className="text-green-500 text-base font-medium">+1.3%</span>
        </div>
        <p className="text-sm text-gray-500 mb-6">Country in this month</p>

        <div className="flex gap-4">
          {countryData.map((country, idx) => (
            <div key={idx} className="flex flex-row gap-2 border rounded-lg p-4">
              <div className="flex flex-row  items-center gap-2 mb-3">
                <p>{country.flag}</p>
                <span className="font-medium text-gray-700">{country.name}</span>
              </div>
              <div className="flex gap-3 flex-wrap">
                {country.metrics.map((metric, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${metric.color}`}
                  >
                    {metric.icon && metric.icon}
                    {metric.value}
                    <span>{metric.up ? "↑" : "↓"}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
