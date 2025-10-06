// src/components/LeftHomeDesign.jsx
import React, { useState } from "react";
import logo from "../assets/Logo.png";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../apiCalls/authCalls";
import { setUserData } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";

function LeftHome() {
  const { userData, suggestedUsers } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    if (isLoggingOut) return;
    
    console.log("Logout Clicked");
    setIsLoggingOut(true);
    
    try {
      await logout(); // call the API
      dispatch(setUserData(null)); // clear user data from Redux
      localStorage.removeItem('token'); // clear token if stored
      navigate('/');
    } catch (error) {
      console.error("Logout failed:", error.message);
      alert(error.message || "Logout failed. Please try again.");
      setIsLoggingOut(false);
    }
  };

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
      {/* Header */}
      <div className="w-full h-[80px] flex items-center justify-between px-6 border-b border-neutral-800">
        <img src={logo} alt="Logo" className="w-[90px]" />
        <div className="relative">
          <div className="w-[28px] h-[28px] bg-neutral-700 rounded-full"></div>
          <div className="w-[10px] h-[10px] bg-green-500 rounded-full absolute top-0 right-[-4px] border-2 border-[#111]"></div>
        </div>
      </div>

      {/* Profile section */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800">
        <div className="flex items-center gap-3">
          <div className="w-[60px] h-[60px] rounded-full overflow-hidden border-2 border-neutral-700 shadow-sm">
            <img
              src={userData?.profileImage}
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="font-semibold text-sm text-neutral-100">
              {userData?.userName}
            </div>
            <div className="text-xs text-neutral-400">{userData?.name}</div>
          </div>
        </div>
        <button
          onClick={handleLogout}
          disabled={isLoggingOut}
          className="text-blue-400 text-sm font-semibold hover:underline disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          {isLoggingOut ? 'Logging out...' : 'Log Out'}
        </button>
      </div>

      {/* Suggested Users */}
      <div className="flex flex-col gap-5 px-6 py-5 overflow-y-auto">
        <h1 className="text-sm font-semibold text-neutral-300 tracking-wide">
          Suggested for you
        </h1>
        {suggestedUsers?.slice(0, 5).map((user) => (
          <div key={user._id || user.id} className="flex items-center justify-between w-full">
            <div className="flex items-center gap-3">
              <div className="w-[48px] h-[48px] rounded-full bg-neutral-700 overflow-hidden">
                {user.profileImage && (
                  <img 
                    src={user.profileImage} 
                    alt={user.userName}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <div>
                <p className="font-medium text-sm text-neutral-200">
                  {user.userName}
                </p>
                <p className="text-xs text-neutral-500">
                  {user.name || 'Suggested for you'}
                </p>
              </div>
            </div>
            <button className="text-blue-400 text-xs font-semibold hover:underline transition">
              Follow
            </button>
          </div>
        )) || (
          // Fallback to placeholder if no suggested users
          Array(5)
            .fill("")
            .map((_, i) => (
              <div key={i} className="flex items-center justify-between w-full">
                <div className="flex items-center gap-3">
                  <div className="w-[48px] h-[48px] rounded-full bg-neutral-700"></div>
                  <div>
                    <p className="font-medium text-sm text-neutral-200">
                      user_{i + 1}
                    </p>
                    <p className="text-xs text-neutral-500">Suggested for you</p>
                  </div>
                </div>
                <button className="text-blue-400 text-xs font-semibold hover:underline transition">
                  Follow
                </button>
              </div>
            ))
        )}
      </div>
    </div>
  );
}

export default LeftHome;