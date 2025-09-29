import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProfile } from "../apiCalls/authCalls";
import { useDispatch, useSelector } from "react-redux";
import { setProfileData } from "../redux/userSlice";
import logo from "../assets/Logo.png";
import NavDesign from "../components/NavBar";

function Profile() {
  const { userName } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { profileData, userData } = useSelector((state) => state.user);

  async function handleProfile() {
    try {
      const userResult = await getProfile(userName);
      dispatch(setProfileData(userResult));
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    handleProfile();
  }, [userName, dispatch]);

  return (
    <div
      className="
        w-full min-h-screen 
        bg-[radial-gradient(1200px_800px_at_10%_-10%,#f58529_0%,transparent_35%),radial-gradient(1200px_800px_at_110%_0%,#dd2a7b_0%,transparent_40%),radial-gradient(900px_700px_at_50%_110%,#8134af_0%,transparent_45%),linear-gradient(180deg,#0f0c29,#302b63,#24243e)]
        flex items-center justify-center
        text-gray-100
      "
    >
      <div
        className="
          w-[95%] lg:max-w-[85%] min-h-[90vh] 
          rounded-2xl flex flex-col overflow-hidden 
          shadow-[0_10px_50px_rgba(0,0,0,0.5)] 
          backdrop-blur-xl bg-white/10 border border-white/20
        "
      >
        {/* Header */}
        <div className="w-full h-[80px] flex items-center justify-between px-6 border-b border-white/20 bg-white/5 backdrop-blur-md">
          <img src={logo} alt="Logo" className="w-[110px]" />
          <div className="flex items-center gap-5">
            <div className="relative">
              <div className="w-[28px] h-[28px] bg-white/20 rounded-full"></div>
              <div className="w-[10px] h-[10px] bg-green-400 rounded-full absolute top-0 right-[-5px] animate-pulse"></div>
            </div>
            <div className="w-[28px] h-[28px] bg-white/20 rounded-full"></div>
          </div>
        </div>

        {/* Profile Section */}
        <div className="flex-1 w-full px-6 py-8 overflow-y-auto">
          <div
            className="
              w-full rounded-xl p-6 
              bg-white/10 backdrop-blur-lg border border-white/20 
              shadow-[0_8px_30px_rgba(0,0,0,0.3)]
            "
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
              {/* Left: Avatar + Info */}
              <div className="flex items-center gap-6">
                <img
                  src={profileData?.profileImage}
                  alt="Profile"
                  className="w-28 h-28 rounded-full object-cover border-4 border-white/30 shadow-lg"
                />
                <div>
                  <h1 className="text-2xl font-bold text-white drop-shadow-sm">
                    {profileData?.name}
                  </h1>
                  <p className="text-sm text-indigo-300">
                    @{profileData?.userName}
                  </p>
                  <p className="mt-1 text-gray-300 text-sm">
                    {profileData?.bio}
                  </p>
                </div>
              </div>

              {/* Right: Edit Profile button */}
              {userData?.userName === profileData?.userName && (
                <button
                  onClick={() => navigate(`/editprofile/`)}
                  className="
                    mt-4 sm:mt-0 px-5 py-2 rounded-lg
                    bg-gradient-to-r from-indigo-500 to-purple-600 
                    text-white font-semibold shadow-md hover:opacity-90 
                    transition transform hover:scale-105
                  "
                >
                  Edit Profile
                </button>
              )}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 text-center border-t border-white/20 pt-4">
              <div>
                <div className="font-bold text-xl text-white">
                  {profileData?.posts.length}
                </div>
                <div className="text-indigo-200 text-sm">Posts</div>
              </div>
              <div>
                <div className="font-bold text-xl text-white">
                  {profileData?.followers.length}
                </div>
                <div className="text-indigo-200 text-sm">Followers</div>
              </div>
              <div>
                <div className="font-bold text-xl text-white">
                  {profileData?.following.length}
                </div>
                <div className="text-indigo-200 text-sm">Following</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Nav */}
        <NavDesign />
      </div>
    </div>
  );
}

export default Profile;
