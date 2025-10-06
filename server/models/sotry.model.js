import mongoose from "mongoose";

let StorySchema = new mongoose.Schema(
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

    mediaUrl: {
      type: String,
      required: true,
    },

    viewers:{
        
    }
  },
  { timestamps: true }
);

let Story = new mongoose.model("story", StorySchema);

export default Story;
