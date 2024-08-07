import MasgasModel from '../models/BlogModel.js';
import bcrypt from 'bcrypt';

const saltRounds = 10;

// Mostrar todos los registros
export const getAllUsuarios = async (req, res) => {
    try {
        const usuarios = await MasgasModel.findAll();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Mostrar un registro
export const getUsuario = async (req, res) => {
    try {
        const usuario = await MasgasModel.findByPk(req.params.id);
        if (usuario) {
            res.json(usuario);
        } else {
            res.status(404).json({ message: 'Usuario no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Crear un registro
export const createUsuario = async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.Password, saltRounds);
        const newUsuario = await MasgasModel.create({
            ...req.body,
            Password: hashedPassword,
        });
        res.status(201).json(newUsuario);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Actualizar un registro
export const updateUsuario = async (req, res) => {
    try {
        const [updated] = await MasgasModel.update(req.body, {
            where: { id: req.params.id },
        });
        if (updated) {
            const updatedUsuario = await MasgasModel.findByPk(req.params.id);
            res.json(updatedUsuario);
        } else {
            res.status(404).json({ message: 'Usuario no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Eliminar un registro
export const deleteUsuario = async (req, res) => {
    try {
        const deleted = await MasgasModel.destroy({
            where: { id: req.params.id },
        });
        if (deleted) {
            res.json({ message: 'Usuario eliminado' });
        } else {
            res.status(404).json({ message: 'Usuario no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Login
export const loginUsuario = async (req, res) => {
    try {
        const { Email, Password } = req.body;
        const usuario = await MasgasModel.findOne({ where: { Email } });
        if (usuario && await bcrypt.compare(Password, usuario.Password)) {
            res.status(200).json({ message: 'Inicio de sesión exitoso' });
        } else {
            res.status(401).json({ message: 'Credenciales inválidas' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
