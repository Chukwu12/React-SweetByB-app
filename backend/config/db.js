import mongoose from 'mongoose';

// DB Connection
const connectDB = async () => {
  try {
    // Use DB_STRING instead of DB_STRING
    const conn = await mongoose.connect(process.env.DB_STRING);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
    console.log(`Connected to Database: ${conn.connection.name}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

export default connectDB;  // Default export
