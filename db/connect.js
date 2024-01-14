const mongoose = require('mongoose');

const connectDB = (uri) =>{
    console.log('Connected Successfully');
    return mongoose.connect(uri);
};

module.exports = connectDB;