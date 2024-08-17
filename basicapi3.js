const express = require('express');
const app = express();
const dbconnect = require('./mongodb');
const mongodb = require('mongodb');

app.use(express.json())

app.get('/', async (req, resp) => {
    const data = await dbconnect()
    const result = await (await data).find().toArray()
    // console.log(result) 
    resp.send(result)
})

app.post('/', async (req, resp) => {
    let db = await dbconnect()
    let result = await db.insertMany([req.body])
    resp.send(result)
})

app.delete('/:id', async (req,resp)=>{
    let data = await dbconnect();
    console.log(req.params.id)
    let result = await data.deleteOne({_id : new mongodb.ObjectId(req.params.id)})
    resp.send(result);
})
app.listen(5000);