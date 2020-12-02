const mongoose = require('mongoose');

const user = new mongoose.Schema({

    firstname:{
        type:String 
    },
    lastname:{ 
        type:String 
    },
    email:{
        type:String 
    },
    phonenumber:{
        type:String 
    },
    image_url:{
        type:String 
    }

});

module.exports = User=mongoose.model('user',user);