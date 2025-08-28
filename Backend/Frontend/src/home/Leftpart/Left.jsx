import React from "react";
import Users from "./Users";
import Search from "./Search";

function Left() {
  return (
    <div className="p-2 gap-2 flex flex-col h-[86.33vh] ml-10 w-[20%] mt-6 rounded-2xl">
      {/* Header */}
      <div className="px-2 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="font-semibold text-2xl tracking-wide"> 
          <img 
            src="/chat.png"  
            alt="App Logo"
            className="w-20 object-contain" 
          /> 
        </div>

        {/* Custom Icons from public folder */}
        <div className="flex items-center space-x-4">
          <img 
            src="/adduser.svg" 
            alt="Add User" 
            className="w-5 h-5 cursor-pointer hover:opacity-70 transition"
          />
          <img 
            src="/filter.svg" 
            alt="Filter" 
            className="w-5 h-5 cursor-pointer hover:opacity-70 transition"
          />
        </div>
      </div>

      {/* Search */}
      <div className="w-full max-w-md py-2 ">
        <Search />
      </div>
      
      {/* Scrollable User List */}
      <div className="h-[69vh]">
        <Users />
      </div>
    </div>
  );
}

export default Left;
