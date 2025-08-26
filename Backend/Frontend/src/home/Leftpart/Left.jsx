import React from "react";
import Users from "./Users";
import { UserPlus, SlidersHorizontal } from "lucide-react";

function Left() {
  return (
    <div className="ml-10 mt-6 w-[23%]  text-gray-800 flex flex-col h-[86.33vh]  rounded-2xl ">
      {/* Header */}
      <div className="px-5 py-4 flex items-center justify-between">
        
        {/* Logo */}
       <div className="font-semibold text-2xl tracking-wide"> 
       <img 
       src="/chat.png"  
        alt="App Logo"
         className="w-20 object-contain" /> 
       </div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <UserPlus className="w-4.5 h-5 cursor-pointer hover:text-blue-500" />
          <SlidersHorizontal className="w-4.5 h-5 cursor-pointer hover:text-blue-500" />
        </div>

      </div>

      {/* Search */}
      

{/* Scrollable User List */}
      <div className="flex-1 overflow-y-auto custom-scroll px-2 py-2">
        <Users />
      </div>
    </div>
  );
}

export default Left;
