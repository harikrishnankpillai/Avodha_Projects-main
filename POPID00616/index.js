const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');
const loginControll = require('./controller/loginController')
const path = require('path')



app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render("signup.ejs")
  

})
app.get('/user', (req, res) => {
  res.render("user.ejs")


})
app.post('/',loginControll.login)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})