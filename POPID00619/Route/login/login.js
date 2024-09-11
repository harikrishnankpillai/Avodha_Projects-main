const express = require('express');
const Route = express.Router();
const {login,register} = require('../../controller/authcontroll')

Route.get('/',(req,res)=>{
 res.render('login')   
})
Route.post('/',login);




module.exports=Route;