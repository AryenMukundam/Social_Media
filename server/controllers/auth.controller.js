import User from "../models/user.model.js";

const signUp = async (req, res) => {
  const { name, userName, email, password } = req.body;
  try {
    // Validating user data
    if (!name || !userName || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Validate Email

    const existingUserEmail = await User.findOne({email});

    if (existingUserEmail) {
      return res.status(400).json({ message: "Email Already in Use" });
    }

    // Validate UserName

    const existingUserName = await User.findOne({userName});

    if (existingUserName) {
      return res.status(400).json({ message: "UserName Already in Use" });
    }

    // Password length
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be 6 characters long" });
    }

    // Create User

    const newUser = await User.create({ name, userName, email, password });
    return res
      .status(201)
      .json({ message: "User Created Successfully" });
  } catch (err) {
    return res.status(500).json({ message: "Internal Server Error" });

  }
};

export default signUp
