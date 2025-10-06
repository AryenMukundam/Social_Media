import express from "express";
import { comments, getAllPosts, like, uploadPost } from "../controllers/post.controller.js";
import { upload } from "../middlewares/multer.js";
import isAuth from "../middlewares/isAuth.js";

const postRouter = express.Router();

postRouter.post("/upload", isAuth, upload.single("mediaUrl"), uploadPost);
postRouter.get("/getAllPosts",isAuth ,  getAllPosts);
postRouter.post("/like/:postId" , isAuth ,like )
postRouter.post("/comment/:postId" , isAuth , comments)


export default postRouter;
