import React, { useEffect } from "react";
import Chatuser from "./Chatuser";
import Messages from "./Messages";
import Typesend from "./Typesend";
import useConversation from "../../statemanage/useConversation.js";
import { useAuth } from "../../context/AuthProvider.jsx";
import { CiMenuFries } from "react-icons/ci";

function Right() {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    return setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className="relative w-[60%] ml-4 mr-4 mt-6 flex flex-col">
      {/* Chatuser header outside the white box */}
      {selectedConversation && (
        <div className="absolute -top-8 left-0 w-full  mt-8">
          <Chatuser />
        </div>
      )}  

      <div className={`mt-20 bg-[#FFFFFF] rounded-2xl shadow-sm flex flex-col h-[68.5vh]`}>
        {!selectedConversation ? (
          <NoChatSelected />
        ) : (
          <>
            {/* Messages (scrollable middle part) */}
            <div className="flex-1 overflow-y-auto px-4  mt-2">
              <Messages />
            </div>

          
          </>
        )}
      </div>
        {/* Footer */}
            <div className=" border-gray-200">
              <Typesend />
            </div>
    </div>
  );
}

export default Right;

const NoChatSelected = () => {
  const [authUser] = useAuth();

  return (
    <div className="flex flex-col h-[86.33vh] items-center justify-center text-center px-6">
      <CiMenuFries className="lg:hidden absolute top-5 left-5 text-gray-700 text-2xl cursor-pointer" />
      <h1 className="text-gray-700 text-lg leading-relaxed">
        Welcome{" "}
        <span className="font-semibold text-xl text-gray-900">
          {authUser.user.fullname}
        </span>
      </h1>
      <p className="text-gray-600 mt-2">
        Send and receive messages without keeping phone online.
      </p>
      <p className="text-gray-600">
        Use Messenger on up to 4 linked devices and 1 phone at the same time.
      </p>
    </div>
  );
};
