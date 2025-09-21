import mongoose from "mongoose";

let StorySchema = new mongoose.Schema(
  {
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

    mediaUrl: {
      type: String,
      required: true,
    },

    viewers:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user'
        }
    ],
    createdAt:{
        type:Date,
        default:Date.now(),
        expires: 86400
    },
  },
  { timestamps: true }
);

let Story = new mongoose.model("story", StorySchema);

export default Story;
