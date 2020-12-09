import React, { useEffect } from 'react'
import './Splash.scss'
import logo from '../../../Assets/logo_blance.png';


export default function Splash(props) {

    useEffect(() => {
        setTimeout(() => {
            props.history.push("/login")
        }, 2000);
    }, [props])

    return (
        <div className="splash">
            <img className="splash__img" src={logo} alt="logo"></img>
        </div>
    )
}
