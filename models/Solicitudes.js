import mongoose from "mongoose";

const solicitudSchema = mongoose.Schema({
    NomEmpresa:{type:String,required:true,trim:true},
    Perfil:{type:String,required:true,trim:true},
    Catidad:{type:Number,required:true},
    Estudiantes:[]
});


const Solicitud = mongoose.model('Solicitud',solicitudSchema);

export default Solicitud;