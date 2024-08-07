import express from "express"
import cors from 'cors'
//importamos la conexion a la BD
import db from "./database/db.js"
//importamos nuestro enrutador
import masgasRoutes from './routes/routes.js'


const app = express()

app.use ( cors())
app.use (express.json())
app.use ('/usuarios', masgasRoutes)

try {
    await db.authenticate()
    console.log ('Conexion exitosa a la DB')
} catch (error) {
    console.log (`El error de conexion es: ${error}`)
}

app.get ('/', (req, res) => {
    res.send('HOLA MUNDO')
})

/*
const salt= 5;
app.post ("/register", (req,res)=>{
    const sql = "INSERT INTO usuarios (`id`, `Nombre`, `Apellido`, `Telefono`, `Email`, `Password`, `createdAt`, `updatedAt`) VALUES (?,?,?,?,?,?,?,?)"
    bycrypt.hash(req.body.Password.toString(),salt,(err,hash)=>{
        if(err) return res.json("Error")
        const values = [req.body.id, req.body.Nombre, req.body.Apellido, req.body.Telefono, req.body.Email, req.body.Password, req.body.createAt, req.body.updateAt, hash]
        db.query(sql,[values],(err, result) =>{
            if(err) console.log(err);
            else return res.json(result)
        })
    })
})*/
app.listen(8000, ()=>{
    console.log('Server UP running in http://localhost:8000/')
})