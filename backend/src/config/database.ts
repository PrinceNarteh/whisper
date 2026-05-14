import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string, {
      dbName: process.env.MONGODB_DATABASE,
      user: process.env.MONGODB_USER,
      pass: process.env.MONGODB_PASS,
      authSource: process.env.MONGODB_USER,
    });
    console.log("✅ MongoDB connected successfully!");
  } catch (error) {
    console.log("❌ MongoDB connection failed: ", error);
    process.exit(1);
  }
};
