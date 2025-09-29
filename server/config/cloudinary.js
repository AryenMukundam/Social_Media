import { v2 as cloudinary } from "cloudinary";

// we are going to send an image and store it on the cloud and then cloudinary will generate url for it
// that url will be stored in database and from that url we will send it to client and client will render it on the app

async function uploadToCloud(file) {
  cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
  });
  try {
    const result = await cloudinary.uploader.upload(file, {
      resource_type: "auto",
    });

    return result.secure_url;
  } catch (error) {
    console.log(error);
  }
}

export default uploadToCloud;
