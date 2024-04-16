import mongoose from "mongoose";

//  Asi se crea el esquema de la colección
const estudianteSchema = mongoose.Schema({
    Nombre:{type:String,required:true,trim:true},
    Carrera:{type:String,required:true,trim:true},
    Cuatrimestre:{type:String,required:true,trim:true}
});

//  Asi se convierte a modelo para poder crear objetos y 
//  poder utilizar los metodos de mongo
const Estudiante =  mongoose.model("Estudiante",estudianteSchema);

//  Asi se exporta para poder usarse en el controlador
export default Estudiante;