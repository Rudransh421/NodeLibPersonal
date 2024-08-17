const express = require('express');
const app = express();
const dbconnect = require('./mongodb');

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

app.listen(5000);