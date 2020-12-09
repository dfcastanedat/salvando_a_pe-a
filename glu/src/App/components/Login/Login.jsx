import React, {useState} from 'react'
import './Login.scss'
import logo from '../../../Assets/logo.png';

export default function Login(props) {

    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(phone.length > 0 && password.length > 0){
            props.history.push("/mapa");
        }
    }

    return (
        <div className="login">
            <img src={logo} alt="Logo" className="login__img"/>
            <span><strong>Número de teléfono</strong></span>
            <input onChange={(e) => setPhone(e.target.value)} type="number"/>
            <span><strong>Contraseña</strong></span>
            <input onChange={(e) => setPassword(e.target.value)} type="password"/>
            <button onClick={handleSubmit}>Iniciar sesión</button>
        </div>
    )
}
