const mongoose = require('mongoose');
const URI = "mongodb+srv://admin:admin@mogodb-cluster1.rht8y.mongodb.net/<dbname>?retryWrites=true&w=majority";

const connectDB= async()=>{
    await mongoose.connect(URI,{
        useUnifiedTopology: true,
        useNewUrlParser: true
    });
    console.log("DB connection Established..!");
}

module.exports =connectDB;