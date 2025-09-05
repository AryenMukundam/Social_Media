import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(cookieParser())
dotenv.config();

connectDB(process.env.dbUrl);

app.use("/api/auth", authRouter);

app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.send("Hello I am ready");
});

app.listen(5000, () => {
  console.log("server is running");
});
