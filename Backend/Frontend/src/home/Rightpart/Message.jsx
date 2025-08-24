import React from "react";

function Message({ message }) {
  const authUser = JSON.parse(localStorage.getItem("ChatApp"));
  const itsMe = message.senderId === authUser.user._id;

  const chatName = itsMe ? " chat-end" : "chat-start";
  // ✅ Light mode friendly colors
  const chatColor = itsMe
    ? "bg-blue-500 text-white"
    : "bg-gray-200 text-gray-900";

  const createdAt = new Date(message.createdAt);
  const formattedTime = createdAt.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div>
      <div className="p-4">
        <div className={`chat ${chatName}`}>
          <div className={`chat-bubble ${chatColor}`}>
            {message.message}
          </div>
          <div className="chat-footer text-xs text-gray-500">
            {formattedTime}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Message;
