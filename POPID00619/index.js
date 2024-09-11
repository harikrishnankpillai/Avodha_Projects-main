const express = require('express');
const mongoose = require('mongoose')
const app = express();
const {dbconnect}  = require('./controller/mogodbconnect')
const login = require('./Route/login/login')
const {register} = require('./controller/authcontroll')


const PORT = 3001;
app.set('view engine','ejs')
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'))

//mongodb cnnection 
dbconnect();

app.use('/login',login)
app.get('/signup',(req,res)=>{

    res.render('signup');
})
app.post('/signup',register)



app.listen(PORT, () => {
    console.log(`server listening on port :${PORT}`)
})