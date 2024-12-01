import React from 'react';

const Dashboard = ({ userName }) => {
  return (
    <div className="bg-gray-100 h-screen flex flex-col justify-center items-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome, {userName}</h1>
        <p className="text-gray-600">
          This is Dashboard
        </p>
        <button className="mt-6 bg-black text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
          Explore Now
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
