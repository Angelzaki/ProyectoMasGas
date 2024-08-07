import express from 'express';
import {
    getAllUsuarios,
    getUsuario,
    createUsuario,
    deleteUsuario,
    updateUsuario,
    loginUsuario
} from '../Controllers/BlogController.js';

const router = express.Router();

router.get('/', getAllUsuarios);
router.get('/:id', getUsuario);
router.post('/', createUsuario);
router.put('/:id', updateUsuario);
router.delete('/:id', deleteUsuario);
router.post('/login', loginUsuario);

export default router;