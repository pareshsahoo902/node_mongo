const express = require('express');
const app = express();

const connectDB = require('./DB/connection');

connectDB();
app.use(express.json({extended: false}))
app.use('/uploads',express.static('uploads'));
app.use('/api/userModel',require('./api/User'));
const Port =  8000;

app.listen(Port,()=>console.log("Server Sarted..!"))
