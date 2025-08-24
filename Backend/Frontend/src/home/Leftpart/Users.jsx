import React from "react";
import User from "./User";
import useGetAllUsers from "../../context/useGetAllUsers";

function Users() {
  const [allUsers, loading] = useGetAllUsers();
  console.log(allUsers);

  return (
    <div className="flex flex-col bg-white text-gray-900 rounded-xl shadow-lg h-full">
      {/* Header */}
      <div className="px-6 py-3 border-b border-gray-200 flex items-center justify-between">
        <h1 className="text-lg font-semibold tracking-wide">💬 Messages</h1>
        <span className="text-xs text-gray-500">
          {allUsers?.length || 0} users
        </span>
      </div>

      {/* User List */}
      <div
        className="py-3 px-2 flex-1 overflow-y-auto space-y-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100"
        style={{ maxHeight: "calc(84vh - 10vh)" }}
      >
        {allUsers.length === 0 && !loading ? (
          <p className="text-center text-gray-500 text-sm py-10">
            No users found 👀
          </p>
        ) : (
          allUsers.map((user, index) => (
            <User key={index} user={user} />
          ))
        )}
      </div>
    </div>
  );
}

export default Users;
