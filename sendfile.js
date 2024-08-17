const express = require('express');
const app = express();

const path =require('path');
const publicpath = path.join(__dirname,'public');

// app.use(express.static(publicpath));
app.get('/home',(req,res)=>{
    res.sendFile(`${publicpath}/bm.html`);
})

app.get('*',(req,res)=>{
    res.send(`
    <h1>Invalid page </h1>
<a target="_blank" href="/home">home page</a>;
    `);
})

app.listen(5000);