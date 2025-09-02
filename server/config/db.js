import mongoose from "mongoose"

async function connectDB(dbUrl) {
  return mongoose
    .connect(dbUrl)
    .then(() => {
      console.log("Db Connected");
    })
    .catch((err) => {
      console.log("Connection falied" ,err);
    });
}

export default connectDB;