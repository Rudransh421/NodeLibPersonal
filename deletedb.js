const dbconnect = require('./mongodb');

const deletedata = async () => {
    const data = await dbconnect();
    let result = await data.deleteOne({ name: 'nokia' });
    console.log(result);


    if (result.acknowledged) {
        console.log("record deleted");
    }
}
deletedata();