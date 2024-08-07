import axios, { formToJSON } from "axios";
import  {useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI ='http://localhost:8000/usuarios/'

const CompEditUsuario = () => {
    const [Nombre, setNombre] = useState ('')
    const [Apellido, setApellido] = useState ('')
    const [Telefono, setTelefono] = useState ('')
    const [Email, setEmail] = useState ('')
    const [Password, setPassword] = useState ('')
    const navigate = useNavigate()
    const {id} = useParams()


    //procedimiento para actualizar
    const update = async(e) => {
        e.preventDefault()
        await axios.put(URI+id, {
            Nombre: Nombre,
            Apellido: Apellido,
            Telefono: Telefono,
            Email: Email,
            Password: Password
        })
        navigate('/')
    }
    useEffect( () => {
        getUsuarioById()
    },[])
    const getUsuarioById = async () => {
        const res = await axios.get(URI+id)
        setNombre(res.data.Nombre)
        setApellido(res.data.Apellido)
        setTelefono(res.data.Telefono)
        setEmail(res.data.Email)
        setPassword(res.data.Password)
    }
    return(
        <div>
            <h1>Edit POST</h1>
            <form onSubmit={update}>
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input 
                        value={Nombre} 
                        onChange={ (e) => setNombre(e.target.value)} 
                        type="text" 
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Apellido</label>
                    <textarea
                        value={Apellido} 
                        onChange={ (e) => setApellido(e.target.value)} 
                        type="text" 
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Telefono</label>
                    <textarea
                        value={Telefono} 
                        onChange={ (e) => setTelefono(e.target.value)} 
                        type="text" 
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <textarea
                        value={Email} 
                        onChange={ (e) => setEmail(e.target.value)} 
                        type="text" 
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <textarea
                        value={Password} 
                        onChange={ (e) => setPassword(e.target.value)} 
                        type="text" 
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-primary">update</button>
            </form>
        </div>
    )
}

export default CompEditUsuario