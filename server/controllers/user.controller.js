import User from "../models/user.model.js";
import uploadToCloud from "../config/cloudinary.js";

export const getCurrentUser = async (req, res) => {
  const userId = req.userId;

  try {
    const user = await User.findById(userId).select("-password");

    if (!user) {
      res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: "Server Error" });
  }
};

export const getProfile = async (req, res) => {
  const userName = req.params.userName;
  const user = await User.findOne({ userName });

  try {
    if (!user) {
      res.status(404).json({ message: "User Not Found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const editProfile = async (req, res) => {
  try {
    const { userName, name, bio } = req.body;

    const user = await User.findById(req.userId);

    // userName Validition and Duplication Check- HW

    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }

    let profileImage='';

    if (req.file) {
      profileImage = await uploadToCloud(req.file.path);

      console.log(profileImage)
    }

    user.name = name;
    user.userName = userName;
    user.bio = bio;
    user.profileImage = profileImage;

    await user.save();
    return res.status(201).json(user);
  } catch (error) {
    console.log(`Error Updating User -> ${error}`);
  }
};