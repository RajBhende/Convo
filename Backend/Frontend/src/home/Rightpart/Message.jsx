import React from "react";
import { FaCheck, FaCheckDouble } from "react-icons/fa";

function Message({ message }) {
  const authUser = JSON.parse(localStorage.getItem("ChatApp"));
  const itsMe = message.senderId === authUser.user._id;

  const chatPositionClass = itsMe ? "justify-end" : "justify-start";
  const bubbleColorClass = itsMe
    ? "bg-blue-600 text-white"
    : "bg-gray-200 text-gray-800";
  const bubbleTailClass = itsMe ? "rounded-br-none" : "rounded-bl-none";
  const timeColorClass = itsMe ? "text-blue-200" : "text-gray-500";

  const createdAt = new Date(message.createdAt);
  const formattedTime = createdAt.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  // Placeholder for status. You would get this from your database.
  const status = itsMe ? "seen" : null; // "sent", "delivered", "seen"

  return (
    <div className={`flex my-3 ${chatPositionClass}`}>
      <div
        className={`flex flex-col p-3 rounded-xl max-w-[70%] relative ${bubbleColorClass} ${bubbleTailClass}`}
      >
        <p className="text-sm">{message.message}</p>
        <div className={`flex items-center self-end mt-1 text-xs ${timeColorClass}`}>
          <span>{formattedTime}</span>
          {itsMe && status === "sent" && <FaCheck className="ml-1" />}
          {itsMe && status === "delivered" && <FaCheckDouble className="ml-1" />}
          {itsMe && status === "seen" && <FaCheckDouble className="ml-1 text-blue-300" />}
        </div>
      </div>
    </div>
  );
}

export default Message;