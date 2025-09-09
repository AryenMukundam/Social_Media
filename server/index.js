import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors"

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin:"http://localhost:5173",
  credentials: true,
  allowedHeaders: ['Content-Type , Authorization'],
  methods : ['GET' , 'POST' , 'PUT' , 'DELETE' , 'OPTIONS']

}))
dotenv.config();

connectDB(process.env.dbUrl);

app.use("/api/auth", authRouter);

app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.send("Hello I am ready");
});

app.listen(8000, () => {
  console.log("server is running");
});
