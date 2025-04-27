import mongoose from 'mongoose';

// DB Connection
const connectDB = async () => {
  try {
    // Use MONGODB_URI instead of DB_STRING
    const conn = await mongoose.connect(process.env.MONGODB_URI);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
    console.log(`Connected to Database: ${conn.connection.name}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

export default connectDB;  // Default export
