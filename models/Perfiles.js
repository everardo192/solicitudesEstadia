import mongoose from "mongoose";

const perfilSchema = mongoose.Schema({
    NombreP:{type:String,required:true,trim:true}    
});

const Perfil = mongoose.model('Perfil',perfilSchema);

export default Perfil;