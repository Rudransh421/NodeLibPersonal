const dbconnect=require('./mongodb');

const updatedata = async ()=>{
    const data = await dbconnect();
    const result =await  data.updateOne(
        {name:'note5'},{
            $set:{name:'note max'}
        }
    )
    console.log(result);
}

updatedata();