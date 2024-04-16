import express from 'express';
import {
    crearSolicitud
} 
from "../controllers/solicitudesController.js"; // metodos del controlador

const router = express.Router(); // Esto es para poder usar los metodos http (post,put,delete,...)


router.post('/add',crearSolicitud); // Primer seccion se ruta para insertar


// asi se exporta el router para poder ser usado en el index (rutas principales)
export default router;