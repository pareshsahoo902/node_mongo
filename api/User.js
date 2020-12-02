const express = require('express');
const mongoose = require('mongoose');
const multer =require('multer');


const storage = multer.diskStorage({

    destination:function(req, ifle,cb){

        cb(null,'./uploads/')
    },
    filename:function(req,file,cb){

        cb(null,file.originalname)
    }
});
const upload = multer({ storage:storage});

const User = require('../DB/User');
const route =express.Router();

route.post('/',upload.single('profile_image'),async (req,res)=>{

    console.log(req.file);
    const{firstname,lastname,email,phonenumber}=req.body; 
    let user={};
    user.firstname = firstname;
    user.lastname = lastname;
    user.email = email;
    user.phonenumber = phonenumber;
    user.image_url = req.file.path;

    let userModel = new User(user);
    await userModel.save();

    res.json(userModel);
});

module.exports = route;