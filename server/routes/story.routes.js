import express from "express";
import { createStory , getAllStories , viewStory } from "../controllers/story.controllers.js";
import isAuth from "../middlewares/isAuth.js";
import { upload } from "../middlewares/multer.js";

const storyRouter = express.Router();

storyRouter.post("/create", isAuth, upload.single("mediaUrl"), createStory);
storyRouter.get("/all", isAuth, getAllStories);

storyRouter.post("/view/:storyId", isAuth, viewStory);


export default storyRouter;