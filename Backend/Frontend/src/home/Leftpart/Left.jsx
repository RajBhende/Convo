import React from "react";
import Search from "./Search";
import Users from "./Users";

function Left() {
  return (
    <div className="w-[28%] bg-white text-gray-800 flex flex-col h-screen border-r border-gray-200">
      {/* Header */}
      <div className="px-5 py-4 border-b border-gray-200 flex items-center justify-between">
        <h1 className="font-semibold text-2xl tracking-wide">Chats</h1>
        <button className="text-gray-500 hover:text-black transition">
          +
        </button>
      </div>

      {/* Search */}
      <div className="px-4 py-3 border-b border-gray-200">
        <Search />
      </div>

      {/* Scrollable User List */}
      <div className="flex-1 overflow-y-auto custom-scroll px-2 py-2">
        <Users />
      </div>
    </div>
  );
}

export default Left;
