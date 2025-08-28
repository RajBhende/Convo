import React, { useState } from "react";
import { IoSend } from "react-icons/io5";
import useSendMessage from "../../context/useSendMessage.js";

function Typesend() {
  const [message, setMessage] = useState("");
  const { loading, sendMessages } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return; // prevent empty sends
    await sendMessages(message);
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center bg-[#FFFFFF] px-4 mt-3 rounded-xl border-gray-300 space-x-3">
        {/* Emoji + Upload Icons (from public folder) */}
        <div className="flex items-center space-x-3">
          <img
            src="/emoji.png"
            alt="Emoji"
            className="w-5 h-5 cursor-pointer hover:opacity-70 transition"
          />
          <img
            src="/upload.png"
            alt="Upload"
            className="w-4 h-5 cursor-pointer hover:opacity-70 transition"
          />
        </div>

        {/* Input Box */}
        <input
          type="text"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-1 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white text-gray-900 placeholder-gray-500 transition"
        />

        {/* Send Button */}
        <button
          type="submit"
          disabled={loading}
          className="ml-3 p-2 rounded-full bg-blue-500 hover:bg-blue-600 text-white transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <IoSend className="text-xl" />
        </button>
      </div>
    </form>
  );
}

export default Typesend;
