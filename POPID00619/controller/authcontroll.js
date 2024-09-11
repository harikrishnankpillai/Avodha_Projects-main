const usermodel = require('../model/userschema')
const bcrypt = require('bcrypt');


async function register(req, res, next) {
   
    const { username, password } = req.body;
    console.log(username,password);
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log(hashedPassword);
        const user = new usermodel({ username:username, password: hashedPassword })
        await user.save();
        res.json("registerd successfully");

    } catch (err) {
        console.log("error happend in register function", err);
        res.json({err:err})
    }

}

const login = async (req,res,next)=>{
    const { username, password } = req.body;
    console.log(password)
    try{
        const user = await usermodel.findOne({username})
        console.log(user);
        if(!user){
            return res.status(404).render("login",{message:{username:'User not found'}});
        }
        const passwordmatch = await  bcrypt.compare(password, user.password)
        console.log(passwordmatch);
        if(!passwordmatch){
            return res.status(401).render("login",{message:{password:'incorrret password'}});
        }
        res.status(200).render('userpage',{user:{name:username}})

    }catch(err){
        console.log('error happen in login authcontroll.js'.err);
    }

}



 
module.exports = { register, login };