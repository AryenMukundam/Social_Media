import { useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/Logo.png";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    } else if (formData.username.length < 3) {
      newErrors.username = "Username must be at least 3 characters";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    return newErrors;
  };

  const handleSubmit = async () => {
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Form submitted:", formData);
      alert("Account created successfully!");
      setFormData({ name: "", username: "", email: "", password: "" });
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050505] via-[#0b0b0f] to-[#10101a] flex flex-col items-center relative overflow-hidden">
      {/* Neon Background Effects */}
      <div className="absolute top-8 left-8 w-52 h-52 bg-purple-600/20 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-8 right-8 w-56 h-56 bg-cyan-500/20 rounded-full blur-2xl animate-ping"></div>
      <div className="absolute top-1/4 right-1/3 w-44 h-44 bg-pink-500/20 rounded-full blur-xl animate-spin-slow"></div>

      {/* NAVBAR */}
      <nav className="w-full flex justify-between items-center px-6 py-4 backdrop-blur-lg bg-white/5 border-b border-white/10 z-20 shadow-md">
        {/* Logo & App Name */}
        <div className="flex items-center gap-3">
          <img
            src={img1}
            alt="Logo"
            className="w-10 h-10 rounded-full border border-white/20 shadow-md"
          />
          <h1 className="text-xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent tracking-wide">
            SocialMedia
          </h1>
        </div>

        

        {/* Sign In Button */}
        <div>
          <Link
            to="/signin"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-5 py-2 rounded-lg text-white font-semibold shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
          >
            Sign In
          </Link>
        </div>
      </nav>

      {/* SIGNUP FORM */}
      <div className="flex-grow flex items-center justify-center w-full px-4 relative z-10">
        <div className="max-w-sm w-full space-y-6">
          {/* Signup Card */}
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 p-5 transform hover:scale-[1.01] transition-all duration-300">
            <div className="text-center mb-5">
              {/* Logo */}
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
              {/* Full Name */}
              <div>
                <label htmlFor="name" className="block text-xs font-semibold text-gray-300 mb-1">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-cyan-400/30 focus:border-cyan-300 bg-white/5 text-white placeholder-gray-500 text-sm transition ${
                    errors.name ? "border-red-400 bg-red-500/10" : "border-white/20"
                  }`}
                />
                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
              </div>

              {/* Username */}
              <div>
                <label htmlFor="username" className="block text-xs font-semibold text-gray-300 mb-1">
                  Username
                </label>
                <div className="relative">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Choose a username"
                    className={`w-full px-3 py-2 pl-8 border rounded-lg focus:ring-2 focus:ring-cyan-400/30 focus:border-cyan-300 bg-white/5 text-white placeholder-gray-500 text-sm transition ${
                      errors.username ? "border-red-400 bg-red-500/10" : "border-white/20"
                    }`}
                  />
                  <span className="absolute inset-y-0 left-2 flex items-center text-cyan-300 font-bold">@</span>
                </div>
                {errors.username && <p className="text-red-400 text-xs mt-1">{errors.username}</p>}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-gray-300 mb-1">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-cyan-400/30 focus:border-cyan-300 bg-white/5 text-white placeholder-gray-500 text-sm transition ${
                    errors.email ? "border-red-400 bg-red-500/10" : "border-white/20"
                  }`}
                />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-xs font-semibold text-gray-300 mb-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Create a strong password"
                    className={`w-full px-3 py-2 pr-10 border rounded-lg focus:ring-2 focus:ring-cyan-400/30 focus:border-cyan-300 bg-white/5 text-white placeholder-gray-500 text-sm transition ${
                      errors.password ? "border-red-400 bg-red-500/10" : "border-white/20"
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-2 flex items-center text-gray-400 hover:text-cyan-300 transition"
                  >
                    {showPassword ? "🙈" : "👁️"}
                  </button>
                </div>
                {errors.password && <p className="text-red-400 text-xs mt-1">{errors.password}</p>}
              </div>

              {/* Submit Button */}
              <div>
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`w-full flex justify-center items-center py-2.5 px-4 rounded-lg shadow-lg text-sm font-semibold transition-all duration-200 ${
                    isSubmitting
                      ? "bg-gray-600 cursor-not-allowed"
                      : "bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 hover:scale-[1.02] hover:shadow-cyan-500/30"
                  } text-white`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Creating...
                    </div>
                  ) : (
                    "Create Account"
                  )}
                </button>
              </div>

              {/* Sign In Link */}
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
            <p className="text-gray-500 text-[10px]">✨ The chaos begins here ✨</p>
          </div>
        </div>
      </div>
    </div>
  );
}
