import { useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/Logo.png";
import { signUp } from "../apiCalls/authCalls.js";
import { useNavigate } from "react-router-dom";



export default function Signup() {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  const handleSignUp = async() => {

    if(!name || !userName || !email || !password){
      alert("Please fill all the details")
      return;
    }

    const user = {
      name , userName , email , password
    }

    try{
      const response = await signUp(user);
      console.log("Sign Up Successful" , response);
      alert("Sign Up Successfull! Please Sign In")

      navigate("/home")
      // clearing the form
      setName("");
      setUserName("")
      setEmail("")
      setPassword("")
      
    }catch(err){
      console.log("Error during Sign up" , err)

    }


    
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050505] via-[#0b0b0f] to-[#10101a] flex flex-col items-center relative overflow-hidden">
      <div className="absolute top-8 left-8 w-52 h-52 bg-purple-600/20 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-8 right-8 w-56 h-56 bg-cyan-500/20 rounded-full blur-2xl animate-ping"></div>
      <div className="absolute top-1/4 right-1/3 w-44 h-44 bg-pink-500/20 rounded-full blur-xl animate-spin-slow"></div>

      <nav className="w-full flex justify-between items-center px-6 py-4 backdrop-blur-lg bg-white/5 border-b border-white/10 z-20 shadow-md">
        <Link to="/" className="flex items-center space-x-2">
          <img
            src={img1}
            alt="Logo"
            className="w-10 h-10 rounded-full shadow-md border border-cyan-500/30 hover:scale-105 transition-transform"
          />
          <span className="text-lg sm:text-xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            SocialMedia
          </span>
        </Link>

        <div>
          <Link
            to="/signin"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-5 py-2 rounded-lg text-white font-semibold shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
          >
            Sign In
          </Link>
        </div>
      </nav>

      <div className="flex-grow flex items-center justify-center w-full px-4 relative z-10">
        <div className="max-w-sm w-full space-y-6">
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 p-5 transform hover:scale-[1.01] transition-all duration-300">
            <div className="text-center mb-5">
              <div className="flex justify-center">
                <img
                  src={img1}
                  alt="Logo"
                  className="w-14 h-14 rounded-full shadow-md border border-white/20"
                />
              </div>
              <h2 className="text-xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mt-3">
                Create Your Account
              </h2>
              <p className="text-gray-400 mt-1 text-xs">
                Join the most chaotic community ever 😎
              </p>
            </div>

            <div className="space-y-3">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-semibold text-gray-300 mb-1"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-cyan-400/30 focus:border-cyan-300 bg-white/5 text-white placeholder-gray-500 text-sm transition 
                   `}
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="username"
                  className="block text-xs font-semibold text-gray-300 mb-1"
                >
                  Username
                </label>
                <div className="relative">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    placeholder="Choose a username"
                    className={`w-full px-3 py-2 pl-8 border rounded-lg focus:ring-2 focus:ring-cyan-400/30 focus:border-cyan-300 bg-white/5 text-white placeholder-gray-500 text-sm transition`}
                    value={userName}
                    onChange={(e) => {
                      setUserName(e.target.value);
                    }}
                  />
                  <span className="absolute inset-y-0 left-2 flex items-center text-cyan-300 font-bold">
                    @
                  </span>
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold text-gray-300 mb-1"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-cyan-400/30 focus:border-cyan-300 bg-white/5 text-white placeholder-gray-500 text-sm transition`}
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>

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
                    placeholder="Create a strong password"
                    className={`w-full px-3 py-2 pr-10 border rounded-lg focus:ring-2 focus:ring-cyan-400/30 focus:border-cyan-300 bg-white/5 text-white placeholder-gray-500 text-sm transition`}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>
              </div>

              <div>
                <button
                 onClick={handleSignUp}
                  className={`w-full flex justify-center items-center py-3 px-5 rounded-xl shadow-lg text-sm font-semibold 
                  bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 
                  hover:from-cyan-600 hover:via-purple-700 hover:to-pink-600 
                  transition-all duration-300 ease-in-out transform hover:scale-[1.05] hover:shadow-cyan-500/40
                  active:scale-[0.97] text-white tracking-wide`}
                >
                  🚀 Create Account
                </button>
              </div>

              <div className="text-center pt-2 border-t border-white/10">
                <p className="text-gray-400 text-xs">
                  Already have an account?{" "}
                  <Link
                    to="/signin"
                    className="font-semibold text-cyan-400 hover:text-purple-400 transition-colors"
                  >
                    Sign in here
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-4">
            <p className="text-gray-500 text-[10px]">
              ✨ The chaos begins here ✨
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
