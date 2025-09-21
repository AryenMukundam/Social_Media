// src/components/RightHomeDesign.jsx
import React from "react";
import Messages from "../pages/Messages";

function RightHome() {
  return (
    <div
      className="
        hidden lg:flex flex-col
        w-[40%] h-[90vh] 
        bg-[#111] rounded-2xl
        shadow-[0_8px_30px_rgba(0,0,0,0.6)]
        overflow-hidden
        text-neutral-200
      "
    >
      {/* Scrollable Messages Section with hidden scrollbar */}
      <div
        className="
          flex-1 overflow-y-auto
          [&::-webkit-scrollbar]:hidden
          [-ms-overflow-style:none]
          [scrollbar-width:none]
          p-4
        "
      >
        <Messages />
      </div>
    </div>
  );
}

export default RightHome;
