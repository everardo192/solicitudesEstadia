import express from 'express';
import {
    crearSolicitud,
    solicitudesEmpresa,
    editarSolicitud,
    obtenerUnaSolicitud,
    borrarSolicitud,
} 
from "../controllers/solicitudesController.js"; // metodos del controlador

const router = express.Router(); // Esto es para poder usar los metodos http (post,put,delete,...)


router.post('/add',crearSolicitud); // Primer seccion se ruta para insertar
router.post('/list',solicitudesEmpresa); // Para listar registros
router.get('/one/:id',obtenerUnaSolicitud); // Obtener un solo registro
router.put('/edit/:id',editarSolicitud); // Para editar registros
router.delete('/delete/:id',borrarSolicitud); // para borra registro


// asi se exporta el router para poder ser usado en el index (rutas principales)
export default router;