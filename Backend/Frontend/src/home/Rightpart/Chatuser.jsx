import React from "react";
import useConversation from "../../statemanage/useConversation.js";
import { useSocketContext } from "../../context/SocketContext.jsx";

function Chatuser() {
  const { selectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();

  const getOnlineUsersStatus = (userId) => {
    return onlineUsers.includes(userId) ? "Online" : "Offline";
  };

  if (!selectedConversation) return null; // handle no selection

  return (
    <div className="w-full h-[10vh] bg-[#4B61DD] flex items-center px-5 rounded-xl">
      {/* Avatar */}
      <div className="avatar online">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <img src="profile.png" alt="User Avatar" className="object-cover w-full h-full" />
        </div>
      </div>

      {/* User Info */}
      <div className="ml-4 flex flex-col justify-center">
        <h1 className="text-xl font-semibold text-white">{selectedConversation.name}</h1>
        <span className="text-sm text-white/80">
          {getOnlineUsersStatus(selectedConversation._id)}
        </span>
      </div>
    </div>
  );
}

export default Chatuser;
