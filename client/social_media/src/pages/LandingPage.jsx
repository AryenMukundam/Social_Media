import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050505] via-[#0b0b0f] to-[#10101a] flex flex-col items-center relative overflow-hidden text-white">
      {/* Neon Background Glows */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-ping"></div>
      <div className="absolute top-1/4 right-1/4 w-56 h-56 bg-pink-500/20 rounded-full blur-2xl animate-spin-slow"></div>

      {/* Navbar */}
      <nav className="w-full flex items-center justify-between px-6 sm:px-12 py-5 relative z-10">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src={Logo}
            alt="Bakwaas Logo"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-md border border-cyan-500/30 hover:scale-110 transition-all duration-300"
          />
          <h1 className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-wide">
            SocialMedia
          </h1>
        </div>

        {/* Auth Links */}
        <div className="flex items-center gap-4">
          <Link
            to="/signin"
            className="px-4 py-2 text-sm rounded-lg bg-white/10 border border-white/20 hover:bg-white/20 transition duration-300"
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            className="px-4 py-2 text-sm rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 hover:scale-105 shadow-lg shadow-cyan-500/30 transition duration-300"
          >
            Sign Up
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center px-6 sm:px-12 mt-10 relative z-10">
        <h2 className="text-4xl sm:text-6xl font-extrabold leading-tight bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
          Where Chaos Meets Conversations 🚀
        </h2>
        <p className="mt-4 text-gray-300 max-w-xl text-sm sm:text-base">
          Welcome to <span className="text-cyan-400 font-semibold">App</span> —
          your ultimate hub for memes, madness, and meeting crazy people just
          like you! Laugh, chat, share, and create chaos — all in one place.
        </p>
        <div className="mt-6 flex gap-4">
          <Link
            to="/signup"
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 hover:scale-105 transition duration-300 shadow-lg shadow-purple-500/30 text-sm sm:text-base"
          >
            Get Started
          </Link>
          <Link
            to="/signin"
            className="px-6 py-3 rounded-lg bg-white/10 border border-white/20 hover:bg-white/20 transition duration-300 text-sm sm:text-base"
          >
            Already a Member
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="mt-16 sm:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 px-6 sm:px-20 max-w-5xl relative z-10">
        {/* Feature 1 */}
        <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
          <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-2">
            🎭 Endless Memes
          </h3>
          <p className="text-gray-400 text-sm">
            Scroll through an infinite feed of trending memes and hilarious
            posts.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300">
          <h3 className="text-xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent mb-2">
            💬 Real-Time Chat
          </h3>
          <p className="text-gray-400 text-sm">
            Talk, argue, roast, and connect with your gang instantly.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
          <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-500 bg-clip-text text-transparent mb-2">
            🌐 Go Viral
          </h3>
          <p className="text-gray-400 text-sm">
            Post your content and watch it blow up across the Bakwaas universe.
          </p>
        </div>
      </section>
    </div>
  );
}
