import jwt from "jsonwebtoken";

const generateToken = async (id) => {
  try {
    //whenever user will register or login with id we will generate a token

    const token = jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    }); // create jwt token

    return token;
  } catch (error) {
    throw new Error("Error in generating Token");
  }
};

export default generateToken;
