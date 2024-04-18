import Solicitud from "../models/Solicitudes.js";

/**
 * Esta funcion crea una nueva solicitud 
 * usando el nombre de la empresa
 */
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

/**
 * Esta funcion lista las solicitudes por 
 * empresa
 */
const solicitudesEmpresa = async (req,res) => {
    const { nombreEmpresa } =  req.body;
    console.log(req.body);
    try {
        const solicitudes = await Solicitud.find().where('NomEmpresa').equals(nombreEmpresa);
        return res.json({msg:"Tus Solicitudes: ",datos:solicitudes})
    } catch (error) {
        return res.json({msg:"No se encontraron solicitudes"});
    }
}

const editarSolicitud = async (req,res) => {
    // Recuperar id
    const { id } = req.params;
    try {
        //  Tarer Registro
        const existeSolicitud = await Solicitud.find({'_id':id});
        
        console.log(existeSolicitud);
        res.json(existeSolicitud);
    } catch (error) {
        res.json({msg:"No se encontro la solicitud"});
    }
}

export{
    crearSolicitud,
    solicitudesEmpresa,
    editarSolicitud,
}