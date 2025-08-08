'use client';

import { useState } from "react";
import Navbar from "./components/Navbar";
import Overview from "./components/Dashboard/Overview";
import Sales from "./components/Dashboard/Apps";
import Prototypes from "./components/Prototypes";
import Dashboards from "./components/Dashboards";

export default function Home() {
  const [activeTab, setActiveTab] = useState("Dashboards");
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case "Dashboards":
        return <Dashboards />;
      case "sales":
        return <Sales />;
      case "Prototypes":
        return <Prototypes />;
      case "customers":
        return <div className="text-center text-gray-600 py-20">Customers section coming soon...</div>;
      case "analytics":
        return <div className="text-center text-gray-600 py-20">Analytics section coming soon...</div>;
      case "targets":
        return <div className="text-center text-gray-600 py-20">Targets section coming soon...</div>;
      case "team":
        return <div className="text-center text-gray-600 py-20">Team section coming soon...</div>;
      case "settings":
        return <div className="text-center text-gray-600 py-20">Settings section coming soon...</div>;
      default:
        return <Dashboards />;
    }
  };

  return (
    <div className="flex h-screen">
      <Navbar
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          setIsPanelOpen(true); // open panel when any tab is clicked
        }}
        openPanel={() => setIsPanelOpen(true)} // for hamburger icon in navbar
      />

      <main className="flex w-full overflow-y-auto">
        {isPanelOpen && (
          <div
            key={activeTab}
            className="relative px-8 py-6 w-[35%] animate-slide-in border border-gray-300"
          >
            {renderContent()}
          </div>
        )}

        <aside className={`${isPanelOpen ? "" : "w-full"}`}>
          <Overview
            isPanelOpen={isPanelOpen}
            setIsPanelOpen={setIsPanelOpen}
            setActiveTab={setActiveTab}
          />
        </aside>
      </main>
    </div>
  );
}
