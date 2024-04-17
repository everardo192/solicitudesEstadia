import mongoose from "mongoose";


const empresaSchema = mongoose.Schema({
    Nombre:{type:String,required:true,trim:true},
    Industria:{type:String,required:true,trim:true},
    Ubicacion:{type:String,required:true,trim:true},
    Telefono:{type:String,required:true,trim:true},
    ClaveEmpresa:{type:String,required:true,trim:true}
});


const Empresa = mongoose.model('Empresa',empresaSchema);

export default Empresa;