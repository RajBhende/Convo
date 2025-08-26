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
    <div className="w-full bg-white text-gray-900 h-[85vh] mt-6 mr-8  ml-4 rounded-2xl flex flex-col shadow">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Header */}
          <div className="flex-shrink-0">
            <Chatuser />
          </div>

          {/* Messages (scrollable middle part) */}
          <div className="flex-1 overflow-y-auto px-4 py-2">
            <Messages />
          </div>

          {/* Footer */}
          <div className="flex-shrink-0 border-t">
            <Typesend />
          </div>
        </>
      )}
    </div>
  );
}


export default Right;

const NoChatSelected = () => {
  const [authUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className="relative">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-ghost drawer-button lg:hidden absolute left-5"
        >
          <CiMenuFries className="text-gray-700 text-xl" />
        </label>
        <div className="flex h-[70vh] items-center justify-center ">
          <h1 className="text-center text-gray-700">
            Welcome{" "}
            <span className="font-semibold text-xl text-gray-900">
              {authUser.user.fullname}
            </span>
            <br />
            Send and receive messages without keeping phone online.
            <br />
            Use Messenger on up to 4 linked devices and 1 phone at the same time.
          </h1>
        </div>
      </div>
    </>
  );
};
