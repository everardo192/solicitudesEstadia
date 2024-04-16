import mongoose from "mongoose";

const Student = mongoose.Schema({
    nombre:{type:String,required:true,trim:true},
    carrera:{type:String,required:true,trim:true},
    periodo:{type:String}
});