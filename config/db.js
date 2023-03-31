const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const connect = await mongoose.connect('mongodb://localhost:27017/store')
        console.log(`database connected`);
    } catch (error) {
        throw error
    }
}

module.exports = connectDB