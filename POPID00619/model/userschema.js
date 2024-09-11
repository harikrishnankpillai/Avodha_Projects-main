const {mongoose,Schema,model } =require('mongoose');
const bcrypt = require('bcrypt');
const { login } = require('../controller/authcontroll');
 
const userschema = new Schema({

    username:{
        type:String ,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
module.exports =  model('users',userschema);