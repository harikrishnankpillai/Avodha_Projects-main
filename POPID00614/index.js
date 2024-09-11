const express = require('express')
const app = express()
const path = require('path')
const upload = require('./Controller/fileupload')
const fs = require('fs');

const PORT = 3001
const uploadsfolder = './uploads/';
const filearray=[]




app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    
    fs.readdir(uploadsfolder, (err, files) => {
   
    files.forEach(file => {
    //   const file1 = file.slice(14)
      console.log(file)
     if(! filearray.includes(file) ) 
       filearray.push(file)
       console.log(filearray);
  
    });
  });
  
    res.render('index',{ filearray : filearray })
  })
  app.post('/upload',upload.single('file') ,(req, res) => {
    
   
    res.redirect('/');
  })

app.listen(PORT,()=>{
    console.log('server running on port',PORT);
})