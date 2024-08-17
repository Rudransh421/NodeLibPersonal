const mongoose = require('mongoose');

const main = async()=>{
    await mongoose.connect('mongodb://localhost:27017/e-comm');
    const productsch= new mongoose.Schema({
        name:String,
        price:Number,
        comp:String
    });
    const productmodel = mongoose.model('product',productsch);
    let data = new productmodel({name:"u8",price:12000,comp:"realm"});
    let result = await data.save();
    console.log(result);
}

main();