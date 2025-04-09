import mongoose from "mongoose";

// DB Connection
export const connectDB = async () => {
  try {
    const uri = 'mongodb+srv://sweetbyB:0123456789@cluster0.cgaebtj.mongodb.net/your_db_name?retryWrites=true&w=majority';
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB Connected");
  } catch (error) {
    console.error("DB connection error:", error);
    process.exit(1); // Exit the process if the connection fails
  }
};
