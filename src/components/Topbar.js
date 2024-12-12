import React from 'react';
import ProfilePopover from './profilePopover';

const Topbar = ({ toggleSidebar }) => {
  return (
    <div className="p-4 text-white bg-[#FDF8FF] shadow-custom-topbar flex items-center justify-between">
      {/* Left: Dashboard Title */}
      <h1 className="text-xl text-black">Dashboard</h1>

      {/* Right: Menu Icon for mobile and Profile Dropdown */}
      <div className="flex items-center">
        <button className="text-black cursor-pointer md:hidden" onClick={toggleSidebar}>
          <img src="/images/icons/menu.svg" alt="Menu" className="w-6 h-6" />
        </button>
        
        {/* Profile Dropdown */}
        <div className="ml-4">
          <ProfilePopover/>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
