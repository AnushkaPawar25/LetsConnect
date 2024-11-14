const mongoose = require('mongoose');

module.exports = async function connectDB() {
  try {
    const mongoDb = process.env.MONGO_URI;
    mongoose.set('strictQuery', false);
    mongoose.connect(mongoDb, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'mongo connection error'));
  } catch (err) {
    console.log(err);
  }
};
