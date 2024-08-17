const dbconnect=require('./mongodb');

const inserts = async () => {
    const db = await dbconnect();
    const result = await db.insertOne(
        {name :'note5',price :'12000',comp:'china'}
    );
    console.log(result);
}

inserts();