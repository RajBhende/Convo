import { useState, useRef, useEffect } from "react";
import { Bell } from "lucide-react";
import Logout from "../home/Logout/Logout";
import Search from "../home/Leftpart/Search";


export default function Navbar() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="w-full flex items-center justify-between px-6 py-3 bg-white shadow-md relative">
      {/* ✅ Left - Logo */}
      <div className="flex items-center gap-2 cursor-pointer ml-20">
        <img
          src="/logo.png" // ✅ logo inside public/logo.png
          alt="App Logo"
          className="h-30 w-30 "
        />
      </div>

      <div className=" flex items-center ">
        <Search />
      </div>

      {/* Right - Actions */}
      <div className="flex items-center gap-4">

       

        {/* Notification Bell */}
        <button className="p-2 rounded-full hover:bg-gray-100 ">
          <Bell className="w-5 h-5" />
        </button>

        {/* Avatar with Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <div
            onClick={() => setOpen(!open)}
            className="w-9 h-9 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold cursor-pointer mr-20"
          >
            👨‍🎓
          </div>

          {/* Dropdown Menu */}
          {open && (
            <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4 border z-50 animate-fadeIn">
              {/* Account Info */}
              <div className="flex items-center gap-3 border-b pb-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-lg font-bold">
                  C
                </div>
                <div>
                  <h3 className="font-medium">Contact</h3>
                  <p className="text-sm text-gray-500">contact@nppmt.com</p>
                  <a href="#" className="text-xs text-blue-600 hover:underline">
                    View account
                  </a>
                </div>
              </div>

              {/* Status + Actions */}
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-2 rounded">
                  ✅ Available
                </li>
                <li className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-2 rounded">
                  ➕ Set work location
                </li>
                <li className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-2 rounded">
                  ✍️ Set status message
                </li>
              </ul>

              {/* Divider */}
              <div className="border-t my-3"></div>

              {/* Add account */}
              <button className="w-full text-left text-sm hover:bg-gray-100 p-2 rounded">
                ➕ Add another account
              </button>

              {/* Sign out */}
              <button className="w-full text-left text-sm text-red-600 hover:bg-red-50 p-2 rounded">
                 <Logout />
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
