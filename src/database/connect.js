import mongoose from "mongoose";

const database = process.env.MONGODB_URI;

export const connectDB = async () => {
  try {
    await mongoose.connect(database, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(">>> DB is connected");
  } catch (error) {
    console.error("DB connection erro:", error);
    process.exit(1);
  }
};
