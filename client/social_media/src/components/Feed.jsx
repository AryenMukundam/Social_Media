// src/components/FeedDesign.jsx
import React from "react";
import logo from "../assets/Logo.png";
import { useSelector } from "react-redux";
import Post from "./Post";
import NavDesign from "./NavBar";
import StoriesBar from "./StoriesBar";

function FeedDesign() {
  const { postData } = useSelector((state) => state.post);

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black flex items-center justify-center p-4">
      <div className="w-full lg:max-w-5xl min-h-[90vh] rounded-3xl flex flex-col overflow-hidden shadow-2xl bg-gray-900 text-gray-100">
        
        {/* Header */}
        <div className="w-full h-[80px] flex items-center justify-between px-6 border-b border-gray-700">
          <img src={logo} alt="Logo" className="w-[120px]" />
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-7 h-7 bg-gray-700 rounded-full flex items-center justify-center">
                <span className="w-2 h-2 bg-green-500 rounded-full absolute top-0 right-0"></span>
              </div>
            </div>
            <div className="w-7 h-7 bg-gray-700 rounded-full"></div>
          </div>
        </div>

           <div className="flex w-full overflow-x-auto gap-4 px-6 py-4 border-b border-neutral-200">
          <StoriesBar/>
        </div>


        {/* Nav Bar */}
        <NavDesign />

        {/* Feed Posts */}
        <div className="flex-1 w-full px-6 py-6 overflow-y-auto space-y-6 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
          {postData?.length > 0 ? (
            postData.map((post) => <Post key={post._id} post={post} />)
          ) : (
            <div className="w-full text-center text-gray-500 py-20">
              No posts to show...
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FeedDesign;
