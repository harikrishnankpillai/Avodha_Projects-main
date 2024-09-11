const express = require('express')
const app = express();
const path = require('path');
const port = 3000;
const bodyparser = require('body-parser')
const https = require('https')




app.use(bodyparser.urlencoded({ extended: true }))
// app.get('/',(req,res)=>{
//     res.send('hello world');
// })
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'))
});
app.post('/', (req, res) => {
    const userLocation = req.body.location;
    const APIKEY = 'c67492b8393ef0ee3c29d76399b4352e';
    const Api = `https://api.openweathermap.org/data/2.5/weather?q=${userLocation}&appid=${APIKEY}`;
    https.get(Api, function (response) {
        response.on('data', (jsondata) => {
            const parsedata = JSON.parse(jsondata);
            console.log(parsedata);
            const icon = parsedata?.weather[0]?.icon;
            const description = parsedata.weather[0]?.description;
            const temp = ((parsedata.main.temp) - 273.15).toFixed(2);
            const location = parsedata?.name;
            //const staticpath = path.join('dist','public')
            app.use(express.static('public'))
            res.render('response.ejs',{location:location,description:description,temp:temp ,icon:icon});
           
            // res.write(`<h1>${location}</h1>`)
            // res.write(`<h1>${temp} &#176;c</h1>`);
            // res.write(`<img src="https://openweathermap.org/img/wn/${icon}.png " alt="weather icon"/> `);

            // res.send();
        })
    })


    //res.write(`<h1>${userLocation}</h1>`);
    // res.write('<h1>data</h1>');
    // res.write('<h1>data</h1>');


    // res.end();
})
app.listen(port, () => {
    console.log('app listening port : ', port);
})