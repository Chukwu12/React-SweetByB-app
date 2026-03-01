import mongoose from 'mongoose';

// DB Connection
const connectDB = async () => {
  try {
    // Use DB_STRING instead of DB_STRING
    const conn = await mongoose.connect(process.env.DB_STRING);

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    if (process.env.NODE_ENV !== 'production') {
      console.log(`Connected to Database: ${conn.connection.name}`);
      console.log("🧠 Connected DB name:", mongoose.connection.name);
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

export default connectDB;  // Default export
