import Estudiante from "../models/Estudiante.js";


const añadirEst = async (req,res) => {
    try{
        //  Si no estan todos los campos en el formulario, no se hace el registro
        const nwEstudiante = new Estudiante(req.body); // asi se crear un objeto estudiante
        const gusrdado = await nwEstudiante.save(); // Asi se gusrda el objeto en la base de datos
        return res.json(({msg:"Nuevo Estudiate Registrado"}));
    }catch(error){
        return res.json({msg:"Faltan datos"})
    }
}


export{
    añadirEst
}