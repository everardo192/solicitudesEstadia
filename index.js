import express,{json} from 'express';
import dotenv from 'dotenv';
import cors from "cors"; // permitir coneiones desde el domini del front

import conectarDB from './config/db.js'
//import estudianteRouter from './routes/estudianteRoutes.js';
import solicitudesRoutes from './routes/solicitudesRoutes.js';
import empresaRoutes from './routes/empresaRoutes.js';

const APP = express();  //  Para concentrar la funcionalidad de express
dotenv.config();    // va a buscar por un archivo .env
conectarDB();   //  Conexion a la base de datos
APP.use(express.json());    //  Para procesar informacion JSON correctamente

//- CORS
// Configurar CORS
    // Dominios Permitidos
const whiteList = [process.env.FRONTEND_URL];
const corsOptions = {
    origin:function(origin,callback){
        // Comprobar en la lista blanca
        if(whiteList.includes(origin)){
            // Puede consultar la API
            callback(null,true);
        }else{
            // No esta permitido
            callback(new Error("Error de CORS"));
        };
    }
};

//- routing Rutas principales

//  APP.use(cors(corsOptions)); --SOLO SE DESCONECTA PARA USARSE CON EL FRONTEND
APP.use(cors(corsOptions));
    //  Para cada solicitud la ruta inicia:'http://localhost:4000/(rutas index.js)/(rutas router/archivoRutas.js)' 
//comentado para otra funcionalidad  APP.use('/app/estudiante',estudianteRouter);    //  Estudiantes
APP.use('/app/solicitud',solicitudesRoutes);    //  Solicitudes
APP.use('/app/empresa',empresaRoutes);    //  Empresa


//  Escucha las conexiones en el puerto 4000
//const PORT = process.env.PORT || 4000;  // Puerto del servidor
const PORT = 4000;  // Puerto del servidor
APP.listen(PORT,()=>{
    console.log(`Servidor corriendo en el puerto: ${PORT}`);
});
