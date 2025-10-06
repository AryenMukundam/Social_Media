import React, { useState } from "react";
import { followUser, unfollowUser } from "../apiCalls/authCalls";

function SuggestedUsers({ suggestions, onFollowSuccess }) {
  const [isFollowing, setIsFollowing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleFollow = async () => {
    if (isLoading) return;
    
    setIsLoading(true);
    try {
      const response = await followUser(suggestions._id);
      setIsFollowing(true);
      
      if (onFollowSuccess) {
        onFollowSuccess(suggestions._id);
      }
      
      console.log("Follow success:", response);
    } catch (error) {
      console.error("Follow error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUnfollow = async () => {
    if (isLoading) return;
    
    setIsLoading(true);
    try {
      await unfollowUser(suggestions._id);
      setIsFollowing(false);
    } catch (error) {
      console.error("Unfollow error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="group flex items-center justify-between w-full py-3 px-3 hover:bg-gradient-to-r hover:from-gray-800/40 hover:to-gray-800/20 rounded-xl transition-all duration-300 ease-in-out">
      <div className="flex items-center gap-3 flex-1 min-w-0">
        {/* Profile Image with gradient border */}
        <div className="relative flex-shrink-0">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 p-[2px] group-hover:from-blue-500/40 group-hover:via-purple-500/40 group-hover:to-pink-500/40 transition-all duration-300">
            <div className="w-full h-full rounded-full bg-gray-900 overflow-hidden">
              {suggestions.profileImage ? (
                <img
                  src={suggestions.profileImage}
                  alt={suggestions.userName}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-300 text-lg font-bold bg-gradient-to-br from-gray-700 to-gray-800">
                  {suggestions.userName?.charAt(0).toUpperCase()}
                </div>
              )}
            </div>
          </div>
          {/* Online indicator (optional) */}
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-900"></div>
        </div>

        {/* User Info */}
        <div className="flex flex-col min-w-0 flex-1">
          <p className="font-semibold text-sm text-gray-100 group-hover:text-white cursor-pointer transition-colors duration-200 truncate">
            {suggestions.userName}
          </p>
          <p className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors duration-200 truncate">
            {suggestions.fullName || "Suggested for you"}
          </p>
        </div>
      </div>

      {/* Follow Button with enhanced styling */}
      <button
        onClick={isFollowing ? handleUnfollow : handleFollow}
        disabled={isLoading}
        className={`
          relative overflow-hidden
          text-xs font-bold px-5 py-2 rounded-lg 
          transition-all duration-300 ease-in-out
          disabled:opacity-50 disabled:cursor-not-allowed
          flex-shrink-0
          ${
            isFollowing
              ? "text-gray-300 bg-gray-800/80 hover:bg-gray-700/80 border border-gray-700 hover:border-gray-600 shadow-sm"
              : "text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 active:scale-95"
          }
        `}
      >
        {/* Button shimmer effect */}
        {!isFollowing && !isLoading && (
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></span>
        )}
        
        <span className="relative z-10">
          {isLoading ? (
            <span className="flex items-center gap-1">
              <svg className="animate-spin h-3 w-3" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </span>
          ) : isFollowing ? (
            "Following"
          ) : (
            "Follow"
          )}
        </span>
      </button>

      {/* Add shimmer animation to tailwind config or use inline style */}
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
}

export default SuggestedUsers;