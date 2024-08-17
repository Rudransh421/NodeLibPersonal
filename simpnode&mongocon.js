const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const database = 'e-comm';

async function getdata() {
    try {
       let result = await client.connect();
        const db = result.db(database);
        const collection = db.collection('product');
        const response = await collection.find({}).toArray(); 
        console.log(response);
    } finally {
        await client.close(); // Make sure to close the connection when done
    }
}

getdata();
