// const express= require('express')
// const app = express();

// const reqFilter=(req,resp,next)=>{
//     if(!req.query.age){
//         resp.send('pls enter age')
//     }
//     else if(req.query.age<18){
//         resp.send('cannot access')
//     }
//     else{
//         next();
//     }
// }

// app.use(reqFilter)

// app.get('/',(req,resp)=>{
//     resp.send('welcome to home page')
// })

// app.listen(5000);
const express = require('express');
const app = express();

app.use('/users',(req,res,next)=>{
    console.log('hii');
    res.send('<h1>Hello twice </h1>')
});

app.use('/',(req,res,next)=>{
    console.log('hii2');
    res.send('<h1>Hello</h1>');
});

app.listen(5000,()=>{
    console.log('connected');
});

