import React, { useState } from 'react';
import Icons from './SocialButton';
import Form from './Formulario';
import Alert from './Alert';
import './Registro.css'

const Registro = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [RegistError, setRegistError] = useState(false);

    const handleLogin = () => {
        setLoggedIn(true);
    }

    return (
        <>
            <div className='container'>
                <h3>Crea una cuenta</h3>
                <div className='icons'>
                    <div className='icon'><Icons icon="fa-facebook" /></div>
                    <div className='icon'><Icons icon="fa-github" /></div>
                    <div className='icon'><Icons icon="fa-linkedin-in" /></div>  
                </div>
                <p>O usa tu email para registrarte</p>
                <div><Form onLogin={handleLogin} RegistError={RegistError} /></div>
                <div>
                    <Alert message={loggedIn ? "¡Has iniciado sesión!" : "Aun no has iniciado sesión"} success={loggedIn} />
                </div>
            </div>
        </>
    );
}

export default Registro;