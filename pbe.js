const express = require('express');
const app = express();

app.get('/about',(req,res)=>{
    res.send('hello this is about page ');
})

app.get('',(req,res)=>{
    console.log("broser info ->",req.query.name);
   
    res.send('welcome '+req.query.name);
})

app.get('/help',(req,res)=>{
    res.send('hello this is help page ');
})

app.listen(5000);