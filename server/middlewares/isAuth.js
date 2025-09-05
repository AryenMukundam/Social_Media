import jwt from "jsonwebtoken";

const isAuth = async (req, res , next) => {
  const token = req.cookies.token;

  if (!token) {
    res.status(404).json({ message: "Token not found" });
  }
  try {
    const decoded = jwt.verify(token , process.env.JWT_SECRET )
    // console.log(decoded)
    req.userId = decoded.id
    next() //whenever there is a middleware after the job is done use next()
  } catch (error) {
    res.status(500).json({message: "Invalid token"})

  }
};

export default isAuth