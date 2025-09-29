import React, { useRef, useState } from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setProfileData, setUserData } from "../redux/userSlice";
import { editProfile } from "../apiCalls/authCalls";

function EditProfile() {
  const { userData } = useSelector((state) => state.user);
  const [profileImage, setProfileImage] = useState(userData?.profileImage || "");
  const [serverProfileImage, setServerProfileImage] = useState(null);
  const [userName, setUserName] = useState(userData?.userName || "");
  const [name, setName] = useState(userData?.name || "");
  const [bio, setBio] = useState(userData?.bio || "");
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const ImageInput = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setProfileImage(URL.createObjectURL(file));
    setServerProfileImage(file);
  };

  const handleEditProfile = async () => {
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("userName", userName);
      formData.append("bio", bio);
      if (serverProfileImage) formData.append("profileImage", serverProfileImage);

      const result = await editProfile(formData);
      dispatch(setUserData(result));
      dispatch(setProfileData(result));

      setMessage("Profile updated successfully!");
      setError(null);
    } catch (err) {
      setError("Failed to update profile");
      setMessage(null);
    }
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Animated background blur layers */}
      <div className="absolute top-[-100px] left-[-200px] w-[600px] h-[600px] bg-pink-500 rounded-full opacity-30 blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-[-150px] right-[-200px] w-[700px] h-[700px] bg-indigo-500 rounded-full opacity-30 blur-3xl animate-pulse-slower"></div>

      {/* Glassy Card */}
      <div className="relative w-full max-w-2xl p-8 flex flex-col gap-6 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/20 shadow-lg z-10">
        
        {/* Header */}
        <div className="flex items-center gap-3">
          <MdOutlineKeyboardBackspace 
            className="text-white cursor-pointer w-7 h-7 hover:text-indigo-400 transition"
            onClick={() => navigate(-1)}
          />
          <h1 className="text-3xl font-bold text-white">Edit Profile</h1>
        </div>

        {/* Messages */}
        {message && (
          <div className="p-3 bg-green-500/20 text-green-300 border border-green-400/30 rounded-lg text-sm animate-fadeIn">
            {message}
          </div>
        )}
        {error && (
          <div className="p-3 bg-red-500/20 text-red-300 border border-red-400/30 rounded-lg text-sm animate-fadeIn">
            {error}
          </div>
        )}

        {/* Profile Image */}
        <div className="flex flex-col items-center gap-4">
          <div className="relative w-[120px] h-[120px] rounded-full overflow-hidden border-4 border-white/30 shadow-xl cursor-pointer group">
            <input type="file" accept="image/*" hidden ref={ImageInput} onChange={handleImage} />
            {profileImage ? (
              <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-gray-700 flex items-center justify-center text-gray-400 text-sm font-medium">
                No Image
              </div>
            )}
            <div
              className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white font-medium text-sm transition-all"
              onClick={() => ImageInput.current.click()}
            >
              Change
            </div>
          </div>
          <button
            onClick={() => ImageInput.current.click()}
            className="text-indigo-400 text-sm font-semibold hover:underline"
          >
            Change Profile Picture
          </button>
        </div>

        {/* Inputs */}
        <div className="flex flex-col gap-4">
          {["name", "userName", "bio"].map((field) => (
            <input
              key={field}
              type="text"
              placeholder={`Enter Your ${field === "userName" ? "Username" : field.charAt(0).toUpperCase() + field.slice(1)}`}
              value={field === "name" ? name : field === "userName" ? userName : bio}
              onChange={(e) => field === "name" ? setName(e.target.value) : field === "userName" ? setUserName(e.target.value) : setBio(e.target.value)}
              className="w-full h-[50px] bg-white/10 border border-white/20 rounded-xl px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 backdrop-blur-sm transition"
            />
          ))}
        </div>

        {/* Save Button */}
        <button
          onClick={handleEditProfile}
          className="w-full h-[50px] bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-xl shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300"
        >
          Save Profile
        </button>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes pulse-slow {
            0%, 100% { transform: translate(0,0) scale(1); }
            50% { transform: translate(20px, 20px) scale(1.2); }
          }
          @keyframes pulse-slower {
            0%, 100% { transform: translate(0,0) scale(1); }
            50% { transform: translate(-20px, -20px) scale(1.3); }
          }
          .animate-pulse-slow { animation: pulse-slow 15s ease-in-out infinite; }
          .animate-pulse-slower { animation: pulse-slower 20s ease-in-out infinite; }
          @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
          .animate-fadeIn { animation: fadeIn 0.5s ease forwards; }
        `}
      </style>
    </div>
  );
}

export default EditProfile;
