import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import { signIn } from "../apiCalls/authCalls";
import { useNavigate } from "react-router-dom";

export default function Signin() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

    const navigate = useNavigate();

  const handleSignIn = async () => {
    if (!userName || !password) {
      alert("Please fill all the details");
      return;
    }

    const user = {
      userName,
      password,
    };

    try {

      
      const response = await signIn(user);
   
      console.log("Sign In Successful", response);
      alert("Sign In Successful");

        navigate("/home")
      // clearing the form
      setUserName("");
      setPassword("");
    } catch (err) {
      console.log("Error during Sign In", err);
      alert("Sign In Failed. Please try again");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050505] via-[#0b0b0f] to-[#10101a] relative overflow-hidden">
      {/* 🌐 Navbar */}
      <nav className="w-full fixed top-0 left-0 z-50 bg-white/5 backdrop-blur-lg border-b border-white/10 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={Logo}
              alt="Logo"
              className="w-10 h-10 rounded-full shadow-md border border-cyan-500/30 hover:scale-105 transition-transform"
            />
            <span className="text-lg sm:text-xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              SocialMedia
            </span>
          </Link>

          {/* Call to Action */}
          <Link
            to="/signup"
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 hover:scale-105 transition shadow-lg text-white text-sm font-semibold"
          >
            Join Now 🚀
          </Link>
        </div>
      </nav>

      {/* 🌈 Neon Background Effects */}
      <div className="absolute top-8 left-8 w-52 h-52 bg-purple-600/20 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-8 right-8 w-56 h-56 bg-cyan-500/20 rounded-full blur-2xl animate-ping"></div>
      <div className="absolute top-1/4 right-1/3 w-44 h-44 bg-pink-500/20 rounded-full blur-xl animate-spin-slow"></div>

      {/* 🔑 Sign In Form */}
      <div className="max-w-sm w-full mx-auto pt-28 pb-10 space-y-6 relative z-10">
        {/* Logo & Title */}
        <div className="flex flex-col items-center">
          <img
            src={Logo}
            alt="App Logo"
            className="w-16 h-16 sm:w-20 sm:h-20 mb-2 rounded-full shadow-lg border border-cyan-500/30 hover:scale-105 transition-transform duration-300"
          />
          <h1 className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-wide drop-shadow-lg">
            Welcome Back 👋
          </h1>
          <p className="text-gray-400 mt-1 text-xs">
            Login to join the chaos 😎
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 p-5 transform hover:scale-[1.01] transition-all duration-300">
          <div className="text-center mb-5">
            <h2 className="text-xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Sign In to Your Account
            </h2>
            <p className="text-gray-400 mt-1 text-xs">
              Enter your credentials 🚀
            </p>
          </div>

          <div className="space-y-3">
            {/* Username */}
            <div>
              <label
                htmlFor="username"
                className="block text-xs font-semibold text-gray-300 mb-1"
              >
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                placeholder="Enter your username"
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-cyan-400/30 focus:border-cyan-300 bg-white/5 text-white placeholder-gray-500 text-sm transition
                  
                `}
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-xs font-semibold text-gray-300 mb-1"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  className={`w-full px-3 py-2 pr-10 border rounded-lg focus:ring-2 focus:ring-cyan-400/30 focus:border-cyan-300 bg-white/5 text-white placeholder-gray-500 text-sm transition`}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            {/* Remember Me + Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-3.5 w-3.5 text-cyan-500 focus:ring-cyan-400 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-xs text-gray-300"
                >
                  Remember me
                </label>
              </div>
              <div className="text-xs">
                <Link
                  to="/forgotpassword"
                  className="font-medium text-cyan-400 hover:text-purple-400 transition-colors"
                >
                  Forgot password?
                </Link>
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <button
                onClick={handleSignIn}
                className={`w-full flex justify-center items-center py-3 px-5 rounded-xl shadow-lg text-sm font-semibold 
                  bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 
                  hover:from-cyan-600 hover:via-purple-700 hover:to-pink-600 
                  transition-all duration-300 ease-in-out transform hover:scale-[1.05] hover:shadow-cyan-500/40
                  active:scale-[0.97] text-white tracking-wide`}
              >
                SignIn
              </button>
            </div>

            {/* Sign Up Link */}
            <div className="text-center pt-2 border-t border-white/10">
              <p className="text-gray-400 text-xs">
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="font-semibold text-cyan-400 hover:text-purple-400 transition-colors"
                >
                  Create one now
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-4">
          <p className="text-gray-500 text-[10px]">
            ✨ Let the chaos begin again ✨
          </p>
        </div>
      </div>
    </div>
  );
}
