import React from "react";
import { Outlet } from 'react-router-dom';
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Header should be fixed at the top */}
      <Header />

      {/* Main content with Sidebar and scrolling content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar should be fixed to the left */}
        <Sidebar />

        {/* Main content area should be scrollable */}
        <main className="flex-1 overflow-y-auto p-6 bg-gray-100">
          <Outlet />
        </main>
      </div>

      {/* Footer should be fixed at the bottom */}
      <Footer />
    </div>
  );
};

export default MainLayout;
