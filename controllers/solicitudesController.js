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

const obtenerUnaSolicitud = async (req,res) => {
    const {id} =req.params;
    try {
        const unaSolicitud = await Solicitud.findById(id);
        return res.json(unaSolicitud);
    } catch (error) {
        return res.json({msg:"Error en el servidor"})
    }
}

const editarSolicitud = async (req,res) => {
    // Recuperar id
    const { id } = req.params;
    console.log('params');
    console.log(req.params);
    console.log('body');
    console.log(req.body);
    try {
        //  Tarer Registro
        const existeSolicitud = await Solicitud.findById(id);
        //PRinTec
        console.log(existeSolicitud);
        existeSolicitud.NomEmpresa = req.body.NomEmpresa || existeSolicitud.NomEmpresa;
        existeSolicitud.Perfil = req.body.Perfil || existeSolicitud.Perfil;
        existeSolicitud.Cantidad = req.body.Cantidad || existeSolicitud.Cantidad;
        console.log(existeSolicitud);
        const solicitudEditada = await existeSolicitud.save();
        return res.json({msg:"Cambios Realizados"});
    } catch (error) {
        res.json({msg:"No se encontro la solicitud"});
    }
}

const borrarSolicitud = async (req,res) => {
    const {id} = req.params;
    try {
        const unaSolicitud = await Solicitud.findByIdAndDelete(id); 
        if(unaSolicitud){
            console.log(unaSolicitud);
        }
        return res.json({msg:"Registro eliminado"});
    } catch (error) {
        return res.json({msg:"Error en el servidor"})
    }
}

export{
    crearSolicitud,
    solicitudesEmpresa,
    obtenerUnaSolicitud,
    editarSolicitud,
    borrarSolicitud
}