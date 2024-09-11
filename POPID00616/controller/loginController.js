const db = {
    username: 'san',
    email:'sa@gmail.com'
}
var path = require('path');
function login(req, res) {

    const data = req.body;
    console.log(data);
    if (data.username === db.username) {

        // console.log(path);
        // res.json({
        //     error: "userAlready exist",
        //     possition: 0
        // })
         res.render("signup.ejs",{username:'user alredy exis'})
        res.end();

    } else {

        if(data.email === db.email){
            res.render("signup.ejs",{email:'email alredy exis'})
            res.end(); 
        }else{

            res.redirect('/user');
            res.end();

        }



      
        // res.json({ success: "signup completed" })
        res.end();

        console.log(data);
    }


}
module.exports = { login: login }