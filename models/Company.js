import mongoose from "mongoose";

const Company = mongoose.Schema({
    nombre:{type:String,required:true,trim:true},
    industria:{type:String,required:true,trim:true},
    ubicacion:{type:String,required:true,trim:true},
    estudiantes:[],
        

});