import mongoose from "mongoose"

const categoryshcema = new mongoose.Schema({
    name :{
        type: String,
        required: true,
    }
},{timestamps:true})

export const Category = mongoose.model("Category",categoryshcema)

// Category is written instead of categories inside model as standard pratice and easy to reference 