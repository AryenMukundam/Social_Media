import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import { BsBookmark } from "react-icons/bs";
import { likePost , comment} from "../apiCalls/authCalls";
import { updatePost } from "../redux/postSlice";

function Post({ post }) {
  const { userData } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  
  const [showComments, setShowComments] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [isLiking, setIsLiking] = useState(false);
  const [isCommenting, setIsCommenting] = useState(false);

  // Check if current user liked this post
  const isLiked = post.likes?.some(id => id === userData?._id);
  const likesCount = post.likes?.length || 0;
  const commentsCount = post.comments?.length || 0;

  // Handle Like
  const handleLike = async () => {
    if (isLiking) return;
    setIsLiking(true);
    
    try {
      const updatedPost = await likePost(post._id);
      console.log(updatedPost)
      dispatch(updatePost(updatedPost));
    } catch (error) {
      console.error("Like error:", error);
    } finally {
      setIsLiking(false);
    }
  };


const handleComment = async (e) => {
  e.preventDefault();
  
  if (!commentText.trim() || isCommenting) return;
  
  setIsCommenting(true);
  
  try {
    const updatedPost = await comment(post._id, commentText);
    dispatch(updatePost(updatedPost));
    setCommentText(""); // Clear input after successful comment
    setShowComments(true); // Show comments section
  } catch (error) {
    console.error("Comment error:", error);
  } finally {
    setIsCommenting(false);
  }
};

  return (
    <div className="w-full bg-gray-800 border border-gray-700 rounded-2xl p-5 mb-6 shadow-lg text-gray-100">
  {/* Post header */}
 <div className="w-10 h-10 rounded-full bg-gray-700 overflow-hidden ring-1 ring-gray-600">
  {post.author.profileImage ? (
    <img
      src={post.author.profileImage}
      alt="profile"
      className="w-full h-full object-cover"
    />
  ) : (
    <div className="w-full h-full bg-gray-600 flex items-center justify-center text-gray-300 font-bold">
      {post.author.userName?.charAt(0).toUpperCase() || "U"}
    </div>
  )}
</div>


  {/* Post media */}
  <div className="w-full h-[500px] bg-gray-700 rounded-xl mb-4 overflow-hidden shadow-inner">
    {post.mediaType === "image" ? (
      <img src={post.mediaUrl} alt="post" className="w-full h-full object-cover rounded-xl" />
    ) : (
      <video src={post.mediaUrl} controls className="w-full h-full object-cover rounded-xl" />
    )}
  </div>

  {/* Actions */}
  <div className="flex items-center gap-4 mb-3 text-2xl text-gray-300">
    <button onClick={handleLike} disabled={isLiking} className="flex items-center gap-1 transition-all hover:text-red-500">
      {isLiked ? <AiFillHeart className="text-red-500" /> : <AiOutlineHeart />}
    </button>
    <button onClick={() => setShowComments(!showComments)} className="flex items-center gap-1 hover:text-blue-400 transition">
      <BiComment />
    </button>
    <BsBookmark className="ml-auto cursor-pointer hover:text-green-400 transition" />
  </div>

  {/* Likes */}
  {likesCount > 0 && (
    <p className="text-sm font-semibold mb-2">{likesCount} {likesCount === 1 ? 'like' : 'likes'}</p>
  )}

  {/* Caption */}
  {post.caption && (
    <p className="text-sm text-gray-200 mb-2">
      <span className="font-semibold">{post.author.userName}</span> {post.caption}
    </p>
  )}

  {/* View comments */}
  {commentsCount > 0 && !showComments && (
    <button onClick={() => setShowComments(true)} className="text-sm text-gray-400 hover:text-gray-200">
      View all {commentsCount} comments
    </button>
  )}

  {/* Comments */}
{showComments && commentsCount > 0 && (
  <div className="mt-3 max-h-[200px] overflow-y-auto border-t border-gray-700 pt-3">
    {post.comments.map((comment, idx) => (
      <div key={idx} className="mb-3">
        <p className="text-sm">
          <span className="font-semibold">{comment.user.userName}</span> {comment.text}
        </p>
        <p className="text-xs text-gray-500 mt-1">{new Date(comment.createdAt).toLocaleDateString()}</p>
      </div>
    ))}
  </div>
)}
  {/* Add comment */}
  <form onSubmit={handleComment} className="flex gap-2 mt-3 border-t border-gray-700 pt-3">
    <input
      type="text"
      placeholder="Add a comment..."
      value={commentText}
      onChange={(e) => setCommentText(e.target.value)}
      className="flex-1 px-3 py-2 text-sm border border-gray-600 rounded-xl bg-gray-900 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
    />
    <button
      type="submit"
      disabled={!commentText.trim() || isCommenting}
      className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-xl hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
    >
      {isCommenting ? "..." : "Post"}
    </button>
  </form>
</div>

  )
}

export default Post;