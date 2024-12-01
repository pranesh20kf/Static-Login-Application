import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white min-h-screen">
        <div className="p-6">
            <h2 className="text-2xl font-bold">MyApp</h2>
        </div>
        <nav className="mt-6">
            <ul>
                <li className="px-6 py-2 hover:bg-gray-700">
                    <Link to="/dashboard" className="block">Dashboard</Link>
                </li>
                <li className="px-6 py-2 hover:bg-gray-700">
                    <Link to="/profile" className="block">Profile</Link>
                </li>
                <li className="px-6 py-2 hover:bg-gray-700">
                    <Link to="/table" className="block">Table</Link>
                </li>
                <li className="px-6 py-2 hover:bg-gray-700">
                    <Link to="/tabledata" className="block">Tabledata</Link>
                </li>
                <li className="px-6 py-2 hover:bg-gray-700">
                    <Link to="/mapdata" className="block">Mapdata</Link>
                </li>    
                <li className="px-6 py-2 hover:bg-gray-700">
                    <Link to="/logout" className="block">Logout</Link>
                </li>
            </ul>
        </nav>
    </aside>
  );
};

export default Sidebar;