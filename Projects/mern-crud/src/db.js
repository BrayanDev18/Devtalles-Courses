import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost/mern-db')
    console.log('db connected');
  } catch (error) {
    console.log(error);
  }
}