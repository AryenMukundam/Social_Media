// src/pages/Home.jsx
import React from "react";
import LeftHome from "../components/LeftHome";
import Feed from "../components/Feed";
import RightHome from "../components/RightHome";

function Home() {
  return (
    <div
      className="
       w-full min-h-screen
       bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f]
       relative overflow-hidden
       flex justify-center
       px-2 sm:px-4 lg:px-6
       py-6
       gap-1
      "
    >
      {/* Gradient Blobs */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute top-40 -right-40 w-[500px] h-[500px] bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 rounded-full blur-3xl opacity-20 animate-pulse delay-2000"></div>

      {/* LEFT HOME (hidden on mobile) */}
      <LeftHome />

      {/* FEED */}
      <Feed />

      {/* RIGHT HOME */}
      <RightHome />
    </div>
  );
}

export default Home;
