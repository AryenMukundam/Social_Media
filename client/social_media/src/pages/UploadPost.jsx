// src/pages/Upload.js
import React, { useState, useRef } from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { FiPlusSquare } from "react-icons/fi";
import { createPost } from "../apiCalls/authCalls";
import logo2 from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setPostData } from "../redux/postSlice";

function Upload() {
  const { postData } = useSelector(state => state.post); // ensure it's destructured properly
  const [uploadType, setUploadType] = useState("post");
  const [frontendMedia, setFrontendMedia] = useState(null);
  const [backendMedia, setBackendMedia] = useState(null);
  const [mediaType, setMediaType] = useState("");
  const [caption, setCaption] = useState("");
  const [loading, setLoading] = useState(false);

  const mediaInput = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleMedia = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.type.includes("image")) setMediaType("image");
    else if (file.type.includes("video")) setMediaType("video");
    else {
      alert("Only images and videos are allowed!");
      return;
    }

    const mediaUrl = URL.createObjectURL(file);
    setFrontendMedia(mediaUrl);
    setBackendMedia(file);
  };

  const uploadPostHandler = async () => {
    if (!backendMedia) return;

    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("mediaType", mediaType);
      formData.append("mediaUrl", backendMedia);
      formData.append("caption", caption);

      const result = await createPost(formData);
      console.log("Post uploaded successfully:", result);

      // Append new post to existing array safely
      dispatch(setPostData([...postData, result]));

      // Reset form
      setFrontendMedia(null);
      setBackendMedia(null);
      setMediaType("");
      setCaption("");
    } catch (error) {
      console.log("Failed to upload Post:", error);
      alert("Failed to upload post");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="w-full lg:max-w-4xl h-[650px] rounded-3xl flex overflow-hidden shadow-2xl">
        {/* LEFT FORM */}
        <div className="w-full lg:w-1/2 h-full bg-gray-800/80 backdrop-blur-md rounded-l-3xl flex flex-col px-8 pt-6 pb-8 gap-6 text-gray-200">
          {/* Header */}
          <div className="flex items-center gap-3">
            <MdOutlineKeyboardBackspace
              className="text-white cursor-pointer w-7 h-7 hover:text-indigo-400 transition"
              onClick={() => navigate(-1)}
            />
            <h2 className="text-xl font-semibold">Upload Media</h2>
          </div>

          {/* Upload type switch */}
          <div className="w-full h-[50px] bg-gray-700/40 rounded-full flex justify-around items-center mt-2 p-1">
            {["post", "story", "reel"].map((type) => (
              <div
                key={type}
                onClick={() => setUploadType(type)}
                className={`w-[30%] h-full flex justify-center items-center text-sm font-medium rounded-full cursor-pointer transition-all duration-200
                  ${
                    uploadType === type
                      ? "bg-blue-600 text-white shadow-md"
                      : "text-gray-300 hover:bg-gray-700/50"
                  }`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </div>
            ))}
          </div>

          {/* Upload box */}
          {uploadType !== "post" ? (
            <div className="w-full h-[220px] bg-gray-800/50 border-2 border-dashed border-gray-600 rounded-xl flex flex-col items-center justify-center gap-3 mt-6">
              <FiPlusSquare className="text-gray-500 w-10 h-10" />
              <p className="text-gray-400 font-medium">Upload coming soon</p>
            </div>
          ) : !frontendMedia ? (
            <div
              onClick={() => mediaInput.current.click()}
              className="w-full h-[220px] bg-gray-800/50 border-2 border-dashed border-gray-600 rounded-xl flex flex-col items-center justify-center gap-3 mt-6 cursor-pointer hover:bg-gray-700 transition relative"
            >
              <input
                type="file"
                accept="image/*,video/*"
                hidden
                ref={mediaInput}
                onChange={handleMedia}
              />
              <FiPlusSquare className="text-gray-400 w-10 h-10" />
              <p className="text-gray-300 font-medium">Upload Post</p>
            </div>
          ) : (
            <div className="w-full mt-6 flex flex-col items-center relative">
              {mediaType === "image" && (
                <img
                  src={frontendMedia}
                  alt=""
                  className="w-full max-h-[220px] object-cover rounded-xl"
                />
              )}
              {mediaType === "video" && (
                <video
                  src={frontendMedia}
                  controls
                  className="w-full max-h-[220px] rounded-xl"
                />
              )}

              {/* Remove Button */}
              <button
                onClick={() => {
                  setFrontendMedia(null);
                  setBackendMedia(null);
                  setMediaType("");
                }}
                className="absolute top-2 right-2 text-red-400 font-bold bg-gray-800/70 rounded-full p-1 hover:bg-gray-700 transition"
              >
                X
              </button>

              <input
                type="text"
                placeholder="Write a caption..."
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                className="w-full mt-4 px-4 py-2 rounded-xl border border-gray-600 bg-gray-900/60 text-gray-200 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition"
              />
            </div>
          )}

          {/* Upload button */}
          {uploadType === "post" && frontendMedia && (
            <button
              onClick={uploadPostHandler}
              disabled={loading}
              className="w-full h-12 mt-6 rounded-xl font-semibold bg-blue-600 text-white hover:bg-blue-700 active:scale-95 transition shadow-lg"
            >
              {loading ? "Uploading..." : "Upload Post"}
            </button>
          )}
        </div>

        {/* RIGHT PANEL */}
        <div className="w-1/2 hidden lg:flex flex-col items-center justify-center bg-gray-900/30 backdrop-blur-md text-white font-semibold">
          <img src={logo2} alt="" className="w-2/5 drop-shadow-lg" />
          <p className="mt-4 text-white/80 text-center px-4">
            Share your moments and stay connected with your friends!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Upload;
