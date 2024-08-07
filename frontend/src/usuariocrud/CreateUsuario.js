import axios from "axios"
import './CreateUsuario.css';
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const URI ='http://localhost:8000/usuarios/'


const CompCreateUsuario = () => {
    const [Nombre, setNombre] = useState ('')
    const [Apellido, setApellido] = useState ('')
    const [Telefono, setTelefono] = useState ('')
    const [Email, setEmail] = useState ('')
    const [Password, setPassword] = useState ('')
    const navigate = useNavigate()

    //Procedimiento guardar

    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, {Nombre: Nombre, Apellido: Apellido, Telefono: Telefono, Email: Email, Password: Password})
        navigate('/')
    }

    return(
  
        <div className="registration-container">
            <h1>Registrate</h1>
            <form onSubmit={store}>
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
                <button type="submit" className="btn btn-primary">Registrarme</button>
                <p className="alternative-text">Registrarme con</p>
                <div className="social-buttons">
                  <a href="#" className="social-button facebook">f</a>
                  <a href="#" className="social-button google">G</a>
                  <a href="#" className="social-button apple">🍎</a>
                </div>
                <p className="login-link">
                  ¿Ya tienes una cuenta? <a href="/LoginPrincipal">Ingresa aquí</a>
                </p>
                <p className="terms">
                  Al crear una cuenta aceptas los <a href="#">Términos y condiciones</a> y <a href="#">Política de Privacidad</a>
                </p>
            </form>
      </div>
    )
}

export default CompCreateUsuario