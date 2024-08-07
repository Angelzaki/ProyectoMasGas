import axios from 'axios'
import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import './ShowUsuario.css';

const URI ='http://localhost:8000/usuarios/'

const CompShowUsuario = () => {
    const [usuarios, setUsuarios] = useState([])
    useEffect( ()=>{
        getUsuarios()
    },[])

    //Procedimientos para mostrar todos los usuarios
    const getUsuarios = async () => {
        const res = await axios.get(URI)
        setUsuarios(res.data)
    }
    //Procedimientos para eliminar un blog
    const deleteUsuarios = async(id) => {
        await axios.delete(`${URI}${id}`)
        getUsuarios()
    }
    return(
        <div className='container'>
            <div className="container1">
                <i className='menu-icon1' id="menu-icon1"></i>
                <nav className="navbar1">
                    <Link to="/UsuarioPrincipal">DashBoard</Link>
                    <Link to="/Registro">Ordenes</Link>
                    <Link to="/LoginPrincipal">Productos</Link>
                    <Link to="/UsuarioPrincipal">Reporte de Ventas</Link>
                    <Link to="/UsuarioPrincipal">Mensajes</Link>
                    <Link to="/UsuarioPrincipal">Ajustes</Link>
                    <Link to="/Home">Sign Out</Link>
                </nav>
             </div>
            <div className='row'>
                <div className='col'>
                    <Link to="/create" className='btn btn-primary mt-2 mb-2'>Crear Usuario</Link>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Telefono</th>
                                <th>Correo</th>
                                <th>Contraseña</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usuarios.map ((usuario)=> (
                                <tr key={usuario.id}> 
                                    <td>{usuario.Nombre}</td>
                                    <td>{usuario.Apellido}</td>
                                    <td>{usuario.Telefono}</td>
                                    <td>{usuario.Email}</td>
                                    <td>{usuario.Password}</td>
                                    <td>   
                                        <Link to={`/edit/${usuario.id}`} className='btn btn-info'>Edit</Link>                    
                                        <button onClick= { ()=>deleteUsuarios(usuario.id)} className='btn btn-danger'>Eliminar</button>
                                    </td>
                                </tr>
                             )) }
                        </tbody>
                    </table>
                </div>
            </div>
            
        </div>
    )
}

export default CompShowUsuario