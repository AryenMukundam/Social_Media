import React from "react";
import Navbar from "../components/NavBar";
import logo2 from "../assets/Logo.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050505] via-[#0b0b0f] to-[#10101a] flex flex-col relative overflow-hidden pt-[80px]">
      {/* Decorative Blurs */}
      <div className="absolute top-10 left-10 w-52 h-52 bg-purple-600/20 rounded-full blur-2xl animate-pulse z-0"></div>
      <div className="absolute bottom-10 right-10 w-56 h-56 bg-cyan-500/20 rounded-full blur-2xl animate-ping z-0"></div>
      <div className="absolute top-1/4 right-1/3 w-44 h-44 bg-pink-500/20 rounded-full blur-xl animate-spin-slow z-0"></div>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex-1 flex justify-center py-8 px-4 relative z-10">
        <div className="w-full lg:max-w-[75%] flex gap-6">
          {/* Feed Section */}
          <div className="w-full lg:w-[65%] flex flex-col gap-6">
            {/* Post Card 1 */}
            <div className="w-full bg-white/5 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 p-5 transition-all duration-300 hover:scale-[1.01] hover:shadow-cyan-500/30">
              <div className="flex items-center gap-3">
                <img
                  src="https://i.pravatar.cc/150?img=7"
                  alt="user"
                  className="w-10 h-10 rounded-full border-2 border-cyan-400 shadow-md"
                />
                <div>
                  <p className="font-semibold text-white text-sm">John Doe</p>
                  <p className="text-xs text-gray-400">2h ago</p>
                </div>
              </div>
              <p className="text-sm text-gray-300 mt-2">
                Loving the new design of ScalerGram 🚀✨
              </p>
              <div className="w-full h-56 rounded-lg bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 shadow-inner"></div>
              <div className="flex justify-between text-sm text-gray-400 mt-3">
                <span className="cursor-pointer hover:text-red-400 transition">❤️ 120</span>
                <span className="cursor-pointer hover:text-blue-400 transition">💬 45</span>
                <span className="cursor-pointer hover:text-green-400 transition">🔗 Share</span>
              </div>
            </div>

            {/* Post Card 2 */}
            <div className="w-full bg-white/5 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 p-5 transition-all duration-300 hover:scale-[1.01] hover:shadow-purple-500/30">
              <div className="flex items-center gap-3">
                <img
                  src="https://i.pravatar.cc/150?img=12"
                  alt="user"
                  className="w-10 h-10 rounded-full border-2 border-purple-400 shadow-md"
                />
                <div>
                  <p className="font-semibold text-white text-sm">Jane Smith</p>
                  <p className="text-xs text-gray-400">5h ago</p>
                </div>
              </div>
              <p className="text-sm text-gray-300 mt-2">
                Just finished my first project with React & Tailwind 💻🔥
              </p>
              <div className="flex justify-between text-sm text-gray-400 mt-3">
                <span className="cursor-pointer hover:text-red-400 transition">❤️ 80</span>
                <span className="cursor-pointer hover:text-blue-400 transition">💬 22</span>
                <span className="cursor-pointer hover:text-green-400 transition">🔗 Share</span>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="hidden lg:flex w-[35%] bg-white/5 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 flex-col justify-start items-center gap-6 p-6">
            {/* Suggested Users */}
            <div className="w-full">
              <p className="font-semibold text-sm mb-3 text-gray-200">
                Suggested for you
              </p>

              <div className="flex flex-col gap-4">
                {[
                  { name: "Alex Johnson", img: "https://i.pravatar.cc/150?img=11" },
                  { name: "Emily Davis", img: "https://i.pravatar.cc/150?img=12" },
                  { name: "Michael Lee", img: "https://i.pravatar.cc/150?img=13" },
                ].map((user, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between bg-white/10 hover:bg-white/20 transition rounded-xl p-2"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={user.img}
                        alt={user.name}
                        className="w-10 h-10 rounded-full border-2 border-white"
                      />
                      <p className="text-sm text-white">{user.name}</p>
                    </div>
                    <button className="text-xs bg-gradient-to-r from-cyan-500 to-purple-600 px-3 py-1 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition">
                      Follow
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Logo at Bottom */}
            <div className="mt-6 opacity-80 hover:opacity-100 transition">
              <img src={logo2} alt="Logo" className="w-24" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
