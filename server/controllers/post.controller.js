import Post from "../models/post.model.js";
import uploadToCloud from "../config/cloudinary.js";
import User from "../models/user.model.js";

// upload post

export const uploadPost = async (req, res) => {
  // media file
  // caption
  // time at which post has been created
  // userName
  // profileImage
  try {
    const { caption, mediaType } = req.body;
    let mediaUrl = "";
    if (req.file) {
      mediaUrl = await uploadToCloud(req.file.path);
    } else {
      return res.status(404).json({ message: "No Media File Detected" });
    }

    const post = await Post.create({
      caption,
      mediaType,
      mediaUrl,
      author: req.userId,
    });

    const user = await User.findById(req.userId).populate("posts");
    user.posts.push(post._id);
    await user.save()

    const populatedPost = await Post.findById(post._id).populate(
      "author",
      "userName profileImage"
    );

    res.status(200).json(populatedPost);
  } catch (error) {
    console.log(`Cannot create post , ${error}`);
  }
};
