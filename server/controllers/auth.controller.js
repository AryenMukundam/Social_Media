import generateToken from "../config/token.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs"; // or "bcrypt"

export const signUp = async (req, res) => {
  const { name, userName, email, password } = req.body;
  try {
    // Validating user data
    if (!name || !userName || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Validate Email

    const existingUserEmail = await User.findOne({ email });

    if (existingUserEmail) {
      return res.status(400).json({ message: "Email Already in Use" });
    }

    // Validate UserName

    const existingUserName = await User.findOne({ userName });

    if (existingUserName) {
      return res.status(400).json({ message: "UserName Already in Use" });
    }

    // Password length
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be 6 characters long" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create User

    const newUser = await User.create({
      name,
      userName,
      email,
      password: hashedPassword,
    });

    const token = await generateToken(newUser._id)
    return res.status(201).json({ message: "User Created Successfully" });
  } catch (err) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const signIn = async (req, res) => {
  // username and password
  // need to verify if the user exist or not
  // bcrypt and compare passwords
  // we allow the user to login

  const { userName, password } = req.body;

  if (!userName || !password) {
    res.status(400).json({ message: "All fields required" });
  }

  const user = await User.findOne({ userName });

  if (!user) {
    res.status(400).json({ message: "User not found" });
  }

  // compare password

  const isCorrectPassword = await bcrypt.compare(password, user.password);

  if (!isCorrectPassword) {
    res.status(400).json({ message: "Incorrect Password" });
  }

  res.status(200).json({ message: "User Logged in" });
};
