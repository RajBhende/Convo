import React from "react";
import User from "./User";

function UserList({ allUsers, loading }) {
  return (
    <div
      className="py-3 px-2 flex-1 overflow-y-auto space-y-2 custom-scrollbar"
      style={{ maxHeight: "calc(84vh - 10vh)" }}
    >
      {allUsers.length === 0 && !loading ? (
        <p className="text-center text-gray-500 text-sm py-10">
          No users found 👀
        </p>
      ) : (
        allUsers.map((user, index) => <User key={index} user={user} />)
      )}
    </div>
  );
}

export default UserList;
