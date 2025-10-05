import express from "express";
import { getAllPosts, like, uploadPost } from "../controllers/post.controller.js";
import { upload } from "../middlewares/multer.js";
import isAuth from "../middlewares/isAuth.js";

const postRouter = express.Router();

postRouter.post("/upload", isAuth, upload.single("mediaUrl"), uploadPost);
postRouter.get("/getAllPosts",isAuth ,  getAllPosts);
postRouter.post("/like/:postId" , isAuth ,like )


export default postRouter;
