import mongoose from "mongoose";

const doctorschema = new mongoose.Schema({
    name :{
        type: String,
        required: true,
    },
    salary :{
        type: String,
        required: true,
    },
    qualification :{
        type: String,
        required: true,
    },
    experienceInYears :{
        type:Number,
        required:true,
    },
    worksInHospital:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Hospital",
        }
    ]
},{timestamps:true})

export const Doctor = mongoose.model('Doctor', doctorschema)