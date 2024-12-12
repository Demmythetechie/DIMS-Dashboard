import React, { useState } from 'react';

const ProfilePopover = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      {/* Profile Picture and Dropdown Icon */}
          <div className="flex items-center cursor-pointer" onClick={toggleDropdown}>
        
        <img
          src="https://api.startup.gov.ng/api/v1/files/4474675d-e00e-4526-9407-a3d5485fe638.png"
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
        <svg
          className="w-5 h-5 ml-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 w-64 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg">
          {/* Profile Info */}
          <div className="flex items-center p-4 border-b">
            <img
              src="https://via.placeholder.com/50"
              alt="Profile"
              className="w-12 h-12 rounded-full"
            />
            <div className="ml-4">
              <p className="text-base font-semibold">John Doe</p>
              <p className="text-sm text-gray-600">Reg No: 123456789</p>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex flex-col p-4 space-y-2">
            <button className="px-4 py-2 text-sm text-left text-gray-700 rounded-lg hover:bg-gray-100">
              Dashboard
            </button>
            <button className="px-4 py-2 text-sm text-left text-gray-700 rounded-lg hover:bg-gray-100">
              Settings
            </button>
            <button className="px-4 py-2 text-sm text-left text-gray-700 rounded-lg hover:bg-gray-100">
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePopover;
