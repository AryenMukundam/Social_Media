import mongoose from "mongoose";

let ReelSchema = new mongoose.Schema(
  {
    author: {
      ref: "user",
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },

    // MediaLink and MediaType
  },
  { timestamps: true }
);

let Reel = new mongoose.model("reel", ReelSchema);

export default Reel;
