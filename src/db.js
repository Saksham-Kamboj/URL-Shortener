const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/URL-Shortner", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to MONGODB ...")
    } catch (err) {
        console.error('Error connecting to database : ', err);
    }
}

module.exports = connectDB;