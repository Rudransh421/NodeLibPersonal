import mongoose from "mongoose";

const patientschema = new mongoose.Schema({
    name :{
        type: String,
        required: true,
    },
    dignosedwith :{
        type: String,
        required: true,
    },
    address :{
        type: String,
        required: true,
    },
    age :{
        type: Number,
        required: true,
    },
    bloodgroup :{
        type: String,
        required: true,
    },
    gender:{
        type:String,
        enum :["M","F","O"],
        required:true,
    },
    admittedin :{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Hospital",
    }
},{timestamps:true})

export const Patient = mongoose.model('Patient', patientschema)