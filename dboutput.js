const dbconnect=require('./mongodb');

const main = async ()=>{
    const data= await dbconnect();
    const resp = await data.find({}).toArray();
    console.log(resp);
}

main();