import express from 'express';


import { añadirEst } from "../controllers/estudianteController.js";

const router = express.Router();

router.post('/add',añadirEst);


export default router;