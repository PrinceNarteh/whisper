import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI;
    if (!mongoUri) {
      throw new Error("MONGODB_URI environment variable is not defined!");
    }
    await mongoose.connect(mongoUri, {
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
