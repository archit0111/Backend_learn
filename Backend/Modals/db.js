const mongoose = require('mongoose');

const connectdb = async () => {
    try{
        await mongoose.connect('mongodb://localhost:27017/');
        console.log('MongoDB connected successfully!');
    }catch(err){
        console.log('Error occurred in DB connection');
    }
};


module.exports = connectdb;