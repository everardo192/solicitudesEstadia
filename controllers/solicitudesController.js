import Solicitud from "../models/Solicitudes.js";


const crearSolicitud = async (req,res) => {
    try{
        //  Si no estan todos los campos en el formulario, no se hace el registro
        const nwSolicitud = new Solicitud(req.body); // asi se crear un objeto estudiante
        const guardado = await nwSolicitud.save(); // Asi se gusrda el objeto en la base de datos
        console.log(guardado);
        return res.json(({msg:"Solicitud Enviada"}));
    }catch(error){
        return res.json({msg:"Faltan datos"})
    }
}


export{
    crearSolicitud
}