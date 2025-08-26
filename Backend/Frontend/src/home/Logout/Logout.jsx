import React, { useState } from "react";
import { FiLogOut } from "react-icons/fi"; // Logout Icon
import axios from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

function Logout() {
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    try {
      await axios.post("/api/user/logout");
      localStorage.removeItem("ChatApp");
      Cookies.remove("jwt");
      setLoading(false);
      toast.success("Logged out successfully");
      window.location.reload();
    } catch (error) {
      console.log("Error in Logout", error);
      toast.error("Error in logging out");
      setLoading(false);
    }
  };

  return (
    <div className="text-gray-800 flex flex-col justify-end items-center py-2">
      <button
        onClick={handleLogout}
        disabled={loading}
        className="group relative flex items-center justify-center p-2 rounded-full hover:bg-red-100 transition duration-300 disabled:opacity-50"
      >
        <FiLogOut className="text-lg text-red-600" />  
        {/* Tooltip */}
        <span className="absolute left-full ml-2 px-2 py-1 text-xs bg-gray-800 text-white rounded-md opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap">
          Logout
        </span>
      </button>
    </div>
  );
}

export default Logout;
