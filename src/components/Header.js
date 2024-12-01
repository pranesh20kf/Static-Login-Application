import React from 'react';

const Header = () => {
    return (
        <header className="bg-white shadow-md py-4 px-6">
            <div className="flex justify-between items-center">
                <h1 className="text-xl font-bold">Welcome User</h1>
                <div>
                    <input
                        type="text"
                        placeholder="Search..."
                        className="border border-gray-300 rounded-lg p-2 outline-none"
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;
