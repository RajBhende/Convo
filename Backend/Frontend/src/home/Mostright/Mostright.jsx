// RightSidebar.jsx

"use client";

import React from "react";

const relatedProfiles = [
  {
    id: 1,
    name: "Dr. K. Gautam",
    title: "Medical Physics Professor at IIT Hyderabad",
    avatar: "/avatar.jpg",
  },
  {
    id: 2,
    name: "Dr. K. Gautam",
    title: "Medical Physics Professor at IIT Hyderabad",
    avatar: "/avatar.jpg",
  },
];

function RightSidebar() {
  return (
    <aside className="p-4 gap-6 flex flex-col h-[86.33vh] mr-10 bg-[#FFFFFF] w-[20%] mt-6 rounded-2xl "> {/* Removed fixed widths and margins */}
      {/* Promotional Content */}
      <div className="bg-[#F5F6FD] rounded-2xl shadow-sm p-6 flex items-center justify-center min-h-[220px]">
        <span className="text-indigo-500 font-medium text-lg">
          Promotional Content
        </span>
      </div>
      {/* Related Profiles */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-800">
            Related Profiles
          </h2>
          <button className="text-indigo-600 font-medium text-sm">Explore</button>
        </div>
        {relatedProfiles.map((profile) => (
          <div
            key={profile.id}
            className="bg-white rounded-2xl shadow-sm p-4 flex flex-col gap-3"
          >
            <div className="flex items-center gap-3">
              <img
                src="/profile.png"
                alt="profilepic"
                className="w-12 h-12 rounded-lg object-cover"
              />
              <div>
                <h3 className="text-base font-bold text-gray-900">
                  {profile.name}
                </h3>
                <p className="text-sm text-gray-500">{profile.title}</p>
              </div>
            </div>
            <button className="border border-indigo-500 text-indigo-600 rounded-xl py-2 text-sm font-medium hover:bg-indigo-50 transition">
              View profile
            </button>
          </div>
        ))}
      </div>
    </aside>
  );
}

export default RightSidebar;