const express = require('express');
const app = express();

const path =require('path');
const publicpath = path.join(__dirname,'public');

app.set('view engine','ejs');

app.get('/home',(req,res)=>{
    res.sendFile(`${publicpath}/bm.html`);
    
})

app.get('/profile',(req,res)=>{
    const name={
        name:'Rudransh',
        email:'rudransh7381@gmail.com',
        city:'Brahmapur',
        skills:['c++','java','c'],
    }
    res.render('profile',{name});
})

app.get('*',(req,res)=>{
    res.send(`
    <h1>Invalid page </h1>
<a target="_blank" href="/home">home page</a>;
    `);
})

app.listen(5000);