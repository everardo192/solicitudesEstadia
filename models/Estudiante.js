import mongoose from "mongoose";

const estudianteSchema = mongoose.Schema({
    Nombre:{type:String,required:true,trim:true},
    Carrera:{type:String,required:true,trim:true},
    Cuatrimestre:{type:String,required:true,trim:true}
});


const Estudiante =  mongoose.model("Estudiante",estudianteSchema);


export default Estudiante;