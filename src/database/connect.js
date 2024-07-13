import mongoose from "mongoose";

const database = process.env.MONGODB_URI;

export const connectDB = async () => {
  try {
    await mongoose.connect(database);
    console.log(">>> DB is connected");
  } catch (error) {
    console.error(error);
  }
};
