import React from "react";
import useGetAllUsers from "../../context/useGetAllUsers";
import UserList from "./Userlist";

function Users() {
  const [allUsers, loading] = useGetAllUsers();

  return (
    <div className="flex flex-col bg-white text-gray-900 rounded-xl shadow-sm h-full">
      {/* Header */}
      <div className="px-6 py-3 border-b bg-gray-300 rounded-t-2xl flex items-center justify-between">
        <h1 className="text-xl font-semibold text-gray-800">Recent Chats</h1>
        <span className="text-xs text-gray-500">
          {allUsers?.length || 0} users
        </span>
      </div>

      {/* ✅ User List Component */}
      <UserList allUsers={allUsers} loading={loading} />
    </div>
  );
}

export default Users;
