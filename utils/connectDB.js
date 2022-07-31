import mongoose from "mongoose";
const MONGO_URI = process.env.MONGO_URI;
const dbConnect = () => {
  try {
    mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.error(`Error:${error.message}`);
    process.exit();
  }
};

export default dbConnect;
