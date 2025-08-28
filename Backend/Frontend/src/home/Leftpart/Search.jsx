import React, { useState, useId } from "react";
import useGetAllUsers from "../../context/useGetAllUsers";
import useConversation from "../../statemanage/useConversation";
import toast from "react-hot-toast";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react"; // X icon

export default function Search() {
  const id = useId();
  const [search, setSearch] = useState("");
  const [allUsers] = useGetAllUsers();
  const { setSelectedConversation } = useConversation();

  // Filter users based on search input
  const filteredUsers = allUsers.filter(
    (user) =>
      user.fullname?.toLowerCase().includes(search.toLowerCase()) ||
      user.email?.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelectUser = (user) => {
    setSelectedConversation(user);
    setSearch(""); // Clear input after selection
    toast.success(`${user.fullname} selected`);
  };

  return (
    <div className="relative w-full">
      <Label htmlFor={id} className="sr-only">
        Search users
      </Label>

      {/* Search Input */}
      <div className="relative w-full">
        <Input
          id={id}
          type="search"
          placeholder="Search users..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pr-10" // extra space for clear button
        />
        {search && (
          <button
            type="button"
            onClick={() => setSearch("")}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <X className="w-4 h-4" />
          </button>
        )}
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
