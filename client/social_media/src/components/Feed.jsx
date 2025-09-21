// src/components/FeedDesign.jsx
import React from "react";
import logo from "../assets/Logo.png";
import NavDesign from "./NavBar";

function FeedDesign() {
  return (
    <div
      className="
        w-full min-h-screen 
        bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f]
        flex items-center justify-center
        relative
      "
    >
      <div className="w-[95%] lg:max-w-[85%] min-h-[90vh] rounded-2xl flex flex-col overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.5)] bg-[#111] text-neutral-200">
        
        {/* Header */}
        <div className="w-full h-[80px] flex items-center justify-between px-6 border-b border-neutral-800">
          <img src={logo} alt="Logo" className="w-[100px]" />
          <div className="flex items-center gap-5">
            <div className="relative">
              <div className="w-[26px] h-[26px] bg-neutral-700 rounded-full"></div>
              <div className="w-[10px] h-[10px] bg-blue-500 rounded-full absolute top-0 right-[-5px]"></div>
            </div>
            <div className="w-[26px] h-[26px] bg-neutral-700 rounded-full"></div>
          </div>
        </div>

        {/* Stories */}
        <div className="flex w-full overflow-x-auto gap-4 px-6 py-4 border-b border-neutral-800">
          <div className="flex flex-col items-center gap-1 shrink-0">
            <div className="w-[60px] h-[60px] rounded-full bg-neutral-700 border-2 border-blue-500"></div>
            <p className="text-xs text-neutral-400">Your Story</p>
          </div>
          {Array(6)
            .fill("")
            .map((_, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-1 shrink-0"
              >
                <div className="w-[60px] h-[60px] rounded-full bg-neutral-700"></div>
                <p className="text-xs text-neutral-400">User {i + 1}</p>
              </div>
            ))}
        </div>

        {/* Navbar inside feed */}
        <NavDesign />

        {/* Feed Posts */}
        <div className="flex-1 w-full px-6 py-6 overflow-y-auto space-y-6">
          {Array(4)
            .fill("")
            .map((_, i) => (
              <div
                key={i}
                className="w-full bg-[#1a1a1a] border border-neutral-800 rounded-xl p-4 shadow-md"
              >
                {/* Post header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-[40px] h-[40px] rounded-full bg-neutral-700"></div>
                  <div>
                    <p className="font-semibold text-sm text-neutral-200">User {i + 1}</p>
                    <p className="text-xs text-neutral-400">2h ago</p>
                  </div>
                </div>

                {/* Post image */}
                <div className="w-full h-[220px] bg-neutral-800 rounded-lg mb-3"></div>

                {/* Post actions + caption */}
                <div className="flex gap-4 mb-2">
                  <div className="w-[22px] h-[22px] bg-neutral-700 rounded-full"></div>
                  <div className="w-[22px] h-[22px] bg-neutral-700 rounded-full"></div>
                  <div className="w-[22px] h-[22px] bg-neutral-700 rounded-full"></div>
                </div>
                <p className="text-sm text-neutral-400">
                  This is a sample caption for post {i + 1}.
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default FeedDesign;
