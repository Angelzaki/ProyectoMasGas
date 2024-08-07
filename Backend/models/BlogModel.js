import db from "../database/db.js";


import { DataTypes } from "sequelize";

const MasgasModel = db.define('usuarios',{
    Nombre: {type:DataTypes.STRING},
    Apellido:{ type: DataTypes.STRING},
    Telefono:{ type: DataTypes.STRING},
    Email:{ type: DataTypes.STRING, unique: true },
    Password:{ type: DataTypes.STRING},
})

export default MasgasModel