import mongoose from "mongoose";

let UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    profileImage: {
      type: String,
      default: "",
    },

    coverPic: {
      type: String,
      default: "",
    },

    bio: {
      type: String,
      default: "",
    },

    followers: [],
    following: [],
    posts: [],
    reels: [],
    story: [],
  },
  { timestamps: true }
);

let User = new mongoose.model("user", UserSchema);

export default User;
