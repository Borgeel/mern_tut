import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

// mongoose.set("strictQuery", false);

export const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);

    console.log(
      `Mongo DB connected: ${connect.connection.host}`.green.underline
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
