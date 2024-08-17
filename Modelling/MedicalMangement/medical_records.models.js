import mongoose from "mongoose";

const medical_recordsschema = new mongoose.Schema({

},{timestamps:true})

export const Medical_Records = mongoose.model('Medical_Records', medical_recordsschema)