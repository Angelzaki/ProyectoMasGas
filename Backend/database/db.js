import { Sequelize } from "sequelize";

const db = new Sequelize('masgas2', 'root1','XVMZkTBwxwlqpac0',{
    host:'localhost',
    dialect:'mysql'
})

export default db