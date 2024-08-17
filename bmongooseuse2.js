const mongoose = require('mongoose');

const main = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/e-comm");
        
        const productsch = new mongoose.Schema({
            name: String,
            price: Number,
            comp: String
        });

        const productmodel = mongoose.model("products", productsch)

        let data = new productmodel({ name: "u8", price: 12000, comp: "realm" });
        
        let result = await data.save();
        console.log(result);
    } catch (error) {
        console.error("Error:", error);
    } finally {
        await mongoose.disconnect(); 
    }
}

main();
