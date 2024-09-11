// const request = require('request');
require('dotenv').config()

function getapi(req,res ){
const apikey = process.env.API_KEY || 'd7254a5c';
   const apiurl = {
    url:'http://www.omdbapi.com/?i=tt3896198',
    method:'GET',
    qs:{
        apikey: apikey
    }
   }


    // request(apiurl, function (error, response, body) {
    //   if (!error && response.statusCode == 200) {
    //    console.log() 
    //     res.render('index',{Poster :JSON.parse(body).Poster});
    //   }
    //   else{
    //     res.status(500).send('Something broke!')
    //   }
    // }) 
    res.send('as');
 
       
    
}
module.exports = getapi;