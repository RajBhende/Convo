import React from "react";
import Left from "./home/Leftpart/Left";
import Right from "./home/Rightpart/Right";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { useAuth } from "./context/AuthProvider";
import { Toaster } from "react-hot-toast";
import Mostright from "./home/Mostright/Mostright"

import Navbar from "./components/comp-584"; // Navbar import केला आहे

import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);

  return (
    <>
      <Routes>
        {/* Home route */}
        <Route
          path="/"
          element={
            authUser ? (
              <div className="h-screen flex flex-col">
                {/* Navbar top */}
                <Navbar />

                {/* Left + Right below navbar  /* bg-[#FAFAFA]*\ */}
                <div className="flex flex-1 bg-[#FAFAFA]"> 
                  <Left />
                  <Right />
                  <Mostright/>
                </div>
              </div>
            ) : (
              <Navigate to={"/login"} />
            )
          }
        />

        {/* Login route */}
        <Route
          path="/login"
          element={authUser ? <Navigate to="/" /> : <Login />}
        />

        {/* Signup route */}
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/" /> : <Signup />}
        />
      </Routes>

      <Toaster />
    </>
  );
}

export default App;
