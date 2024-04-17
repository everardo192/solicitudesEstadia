import Empresa from "../models/Empresa.js";
import generarId from "../helpers/generarId.js";


const registEmpresa = async (req,res) => {
    try{
        //  Si no estan todos los campos en el formulario, no se hace el registro
        const nwEmpresa = new Empresa(req.body);// asi se crear un objeto estudiante
        nwEmpresa.ClaveEmpresa = generarId(); // asi se le asigna una clave a la empresa
        const guardado = await nwEmpresa.save(); // Asi se gusrda el objeto en la base de datos
        return res.json(({msg:"Empresa Registrada. Anota tu clave: ",clve:nwEmpresa.ClaveEmpresa}));
    }catch(error){
        return res.json({msg:"Faltan datos"})
    }
}


export{
    registEmpresa
}