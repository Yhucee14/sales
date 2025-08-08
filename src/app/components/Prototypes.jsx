'use client';
import React, { useState } from "react";

const Prototypes = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const toggleDropdown = (index) => setOpenIndex(openIndex === index ? null : index);


    const firstSection = [
        { title: "Chat", options: ["Option 1", "Option 2"] },
        { title: "Notifications", options: ["Email", "Slack"] },
        { title: "Settings", options: ["Profile", "Preferences"] },
        { title: "Messages" },
        { title: "Chat", options: ["Option 1", "Option 2"] },
        { title: "Notifications", options: ["Email", "Slack"] },
        { title: "Settings", options: ["Profile", "Preferences"] },
    
    ];

    const secondSection = [
        { title: "Layouts", options: ["Grid", "List"] },
        { title: "Integrations", options: ["API", "Webhook"] },
    ];

      const thirdSection = [
        { title: "Layouts", options: ["Grid", "List"] },
    ];

    const renderList = (list, sectionName) =>
        list.map((item, idx) => {
            const id = `${sectionName}-${idx}`;
            const isOpen = openIndex === id;
            const hasDropdown = item.options && item.options.length > 0;

            return (
                <div key={id} className="py-2">
                    {hasDropdown ? (
                        <>
                            <button
                                onClick={() => toggleDropdown(id)}
                                aria-expanded={isOpen}
                                aria-controls={`${id}-panel`}
                                className="w-full flex items-center justify-between text-left text-gray-700 hover:text-blue-500 focus:outline-none"
                            >
                                <span className="flex items-center gap-3">
                                    <span className="text-sm font-medium">{item.title}</span>
                                </span>


                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className={`h-4 w-4 transform transition-transform duration-300 ${isOpen ? "rotate-90" : "rotate-0"
                                        }`}
                                >
                                    <path d="M9 5l7 7-7 7" />
                                </svg>
                            </button>

                            <div
                                id={`${id}-panel`}
                                className={`ml-4 mt-2 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[240px] opacity-100" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <div
                                    className={`space-y-1 py-1 transition-transform duration-200 ${isOpen ? "translate-y-0" : "-translate-y-1"
                                        }`}
                                >
                                    {item.options.map((opt, i) => (
                                        <p
                                            key={i}
                                            className="text-gray-500 hover:text-blue-500 cursor-pointer"
                                        >
                                            {opt}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </>
                    ) : (
                        <button
                            onClick={item.onClick}
                            className="text-sm pb-2 font-medium text-gray-700 hover:text-blue-500 cursor-pointer text-left w-full"
                        >
                            {item.title}
                        </button>
                    )}
                </div>
            );
        });

    return (
        <div className="space-y-4">
            <div>
                <h2 className="text-xl font-bold text-gray-800">Prototypes</h2>
            </div>

            {/* First section */}
            <div className="border-b border-gray-300 py-4">{renderList(firstSection, "first")}</div>

            {/* Second section */}
            <div className="border-b border-gray-300 py-4">{renderList(secondSection, "second")}</div>

            {/* third section */}
            <div className=" py-4">{renderList(thirdSection, "third")}</div>
        </div>
    );
};

export default Prototypes;
