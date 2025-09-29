import mongoose from "mongoose";

let PostSchema = new mongoose.Schema(
  {
    // user
    // to refer to some different collection in mongo we use schema types
    author: {
      ref: "user",
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },

    // MediaLink and MediaType

    mediaType: {
      type: String, // url
      enum: ["image", "video"],
      required: true,
    },

    // likes

    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
    ],

    comments: [
      // array
      {
        user: {
          ref: "user",
          type: mongoose.Schema.Types.ObjectId,
          required: true,
        },

        text: {
          type: String,
          required: true,
        },
        createdAt: {
          type: Date,
          default: Date.now(),
        },
      },
    ],

    caption:{
        type:String,
        required:true
    },

    mediaUrl:{
        type:String,
        required:true
    }
  },
  { timestamps: true }
);

let Post = new mongoose.model("post", PostSchema);

export default Post;
