import express from 'express';
import { registEmpresa } from '../controllers/empresaController.js';

const router = express.Router();

router.post('/add',registEmpresa);


export default router;