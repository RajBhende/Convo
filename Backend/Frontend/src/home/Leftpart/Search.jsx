import React, { useState } from "react";
import useGetAllUsers from "../../context/useGetAllUsers";
import useConversation from "../../statemanage/useConversation";
import toast from "react-hot-toast";
import { FaSearch } from "react-icons/fa";

function Search() {
  const [search, setSearch] = useState("");
  const [allUsers] = useGetAllUsers();
  const { setSelectedConversation } = useConversation();

  // Filtered users based on search input
  const filteredUsers = allUsers.filter((user) =>
    user.fullname?.toLowerCase().includes(search.toLowerCase()) ||
    user.email?.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelectUser = (user) => {
    setSelectedConversation(user);
    setSearch(""); // Clear search input after selection
    toast.success(`${user.fullname} selected`);
  };

  return (
   <div className="relative w-full">
  {/* Input */}
  <div className="flex items-center rounded-xl border border-gray-700 h-10 w-80 px-4">
    <FaSearch className="text-gray-400 mr-3" />
    <input
      type="text"
      className="w-full text-gray-800 placeholder-gray-400 focus:outline-none"
      placeholder="Search"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  </div>

  {/* Live Search Results */}
  {search && (
    <div className="absolute top-full left-0 w-full mt-1 max-h-60 overflow-y-auto rounded-lg shadow-lg bg-white border border-gray-200 z-50">
      {filteredUsers.length > 0 ? (
        filteredUsers.map((user) => (
          <div
            key={user.id}
            className="p-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => handleSelectUser(user)}
          >
            <p className="font-medium text-gray-800">{user.fullname}</p>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
        ))
      ) : (
        <p className="p-2 text-gray-500">No users found</p>
      )}
    </div>
  )}
</div>

  );
}

export default Search;