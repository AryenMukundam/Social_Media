import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png"; // <-- Add your logo path here

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
    if (errors) setErrors("");
    if (successMessage) setSuccessMessage("");
  };

  const validateForm = () => {
    if (!email.trim()) return "Email is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return "Enter a valid email address";
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setErrors(validationError);
      return;
    }

    setIsSubmitting(true);
    try {
      
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setSuccessMessage(
        "🎉 If this email is registered, a reset link has been sent!"
      );
      setEmail("");
    } catch (error) {
      setErrors("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050505] via-[#0b0b0f] to-[#10101a] flex items-center justify-center px-3 relative overflow-hidden">
      {/* Neon background glows */}
      <div className="absolute top-8 left-8 w-52 h-52 bg-purple-600/20 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-8 right-8 w-56 h-56 bg-cyan-500/20 rounded-full blur-2xl animate-ping"></div>
      <div className="absolute top-1/4 right-1/3 w-44 h-44 bg-pink-500/20 rounded-full blur-xl animate-spin-slow"></div>

      <div className="max-w-sm w-full space-y-6 relative z-10">
        {/* Logo */}
        <div className="flex flex-col items-center">
          <img
            src={Logo}
            alt="App Logo"
            className="w-16 h-16 sm:w-20 sm:h-20 mb-2 rounded-full shadow-lg border border-cyan-500/30 hover:scale-105 transition-transform duration-300"
          />
          <h1 className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-wide drop-shadow-lg">
            SocialMedia
          </h1>
          <p className="text-gray-400 mt-1 text-xs">Forgot your password? 😎</p>
        </div>

        <div className="bg-white/5 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 p-5 transform hover:scale-[1.01] transition-all duration-300">
          <div className="text-center mb-5">
            <h2 className="text-xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Reset Your Password
            </h2>
            <p className="text-gray-400 mt-1 text-xs">
              Enter your email to receive a reset link ✉️
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Email Input */}
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
                value={email}
                onChange={handleChange}
                placeholder="Enter your email"
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-cyan-400/30 focus:border-cyan-300 bg-white/5 text-white placeholder-gray-500 text-sm transition ${
                  errors
                    ? "border-red-400 bg-red-500/10"
                    : "border-white/20"
                }`}
              />
              {errors && <p className="text-red-400 text-xs mt-1">{errors}</p>}
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
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
                    Sending Link...
                  </div>
                ) : (
                  "Send Reset Link"
                )}
              </button>
            </div>

            {/* Success Message */}
            {successMessage && (
              <p className="text-green-400 text-xs text-center mt-2">
                {successMessage}
              </p>
            )}

            {/* Back to Sign In */}
            <div className="text-center pt-2 border-t border-white/10">
              <p className="text-gray-400 text-xs">
                Remember your password?{" "}
                <Link
                  to="/signin"
                  className="font-semibold text-cyan-400 hover:text-purple-400 transition-colors"
                >
                  Sign In
                </Link>
              </p>
            </div>
          </form>
        </div>

        <div className="text-center mt-4">
          <p className="text-gray-500 text-[10px]">✨ Reset it and start chaos again ✨</p>
        </div>
      </div>
    </div>
  );
}
