import mongoose from "mongoose";

const solicitudSchema = mongoose.Schema({
    NomEmpresa:{type:String,required:true,trim:true},
    Perfil:{type:String,required:true,trim:true},
    Cantidad:{type:Number,required:true},
    Estudiantes:[]
},{tymestamps:true}
);


const Solicitud = mongoose.model('Solicitud',solicitudSchema);

export default Solicitud;