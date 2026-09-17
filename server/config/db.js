const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const connStr = process.env.MONGODB_URI;
    if (!connStr) {
      console.log('MONGODB_URI not found in environment. Operating in Memory-Fallback Mode.');
      return false;
    }

    const conn = await mongoose.connect(connStr);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    return true;
  } catch (error) {
    console.warn(`MongoDB connection warning: ${error.message}. Continuing in Memory-Fallback Mode.`);
    return false;
  }
};

module.exports = connectDB;
