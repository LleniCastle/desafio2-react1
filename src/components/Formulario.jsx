
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import './Formulario.css'

const Form = ({ onLogin, RegistError }) => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [confirmar, setConfirmar] = useState("");
    const [error, setError] = useState(false);
    const [contraseñaError, setContraseñaError] = useState(false);

    const validarInfo = (e) => {
        e.preventDefault();

        if (nombre === "" || email === "" || contraseña === "" || confirmar === "") {
            setError(true);
            return;
        } else if (contraseña != confirmar) {
            setContraseñaError(true);
            return;
        }

        setNombre("");
        setEmail("");
        setContraseña("");
        setConfirmar("");
        setError(false);
        setContraseñaError(false);
        setRegistError(false);
    }

    const [emailRegist, setEmailRegist] = useState("");
    const [contraseñaRegist, setContraseñaRegist] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);

    const validarAcceso = (e) => {
        e.preventDefault();
        if (contraseñaRegist === "" || emailRegist === "") {
            setRegistError(true);
        } else {
            message();
            setContraseñaRegist("");
            setEmailRegist("");
            setRegistError(false);
        }
    }

    const message = () => {
        if (contraseñaRegist && emailRegist) {
            onLogin();
            setEmailRegist("");
            setContraseñaRegist("");
        }
    };



    return (
        <>

            <form className="formulario" onSubmit={validarInfo}>
                {error ? <p className="btn-danger p-1">Por favor, rellenar todos los campos del formulario.</p> : null}
                {contraseñaError ? <p className="btn-danger p-1">Por favor, digite contraseñas iguales.</p> : null}

                <div className="formInput">
                    <input
                        type="text"
                        name="nombre"
                        placeholder="Nombre"
                        className="input"
                        onChange={(e) => setNombre(e.target.value)}
                        value={nombre}
                    />
                </div>

                <div className="formInput">
                    <input
                        type="email"
                        name="email"
                        placeholder="Correo electrónico"
                        className="input"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </div>

                <div className="formInput">
                    <input
                        type="password"
                        name="contraseña"
                        placeholder="Contraseña"
                        className="input"
                        onChange={(e) => setContraseña(e.target.value)}
                        value={contraseña}
                    />
                </div>

                <div className="formInput">
                    <input
                        type="password"
                        name="confirmar"
                        placeholder="Confirmar contraseña"
                        className="input"
                        onChange={(e) => setConfirmar(e.target.value)}
                        value={confirmar}
                    />
                </div>

                <Button variant="outline-info" type="submit">Registrarse</Button>

            </form>


            <div>
                <h5>Si ya te encuentras registrado/a, inicia sesión.</h5>
                <form className="formulario" onSubmit={validarAcceso}>
                    {RegistError ? <p className="btn-danger p-1">Ingresa tus datos para iniciar sesión</p> : null}

                    <div className="formInput">
                        <input
                            type="email"
                            name="emailRegist"
                            placeholder="Correo electrónico"
                            className="input"
                            onChange={(e) => setEmailRegist(e.target.value)}
                            value={emailRegist}
                        />
                    </div>

                    <div className="formInput">
                        <input
                            type="password"
                            name="contraseñaRegist"
                            placeholder="Contraseña"
                            className="input"
                            onChange={(e) => setContraseñaRegist(e.target.value)}
                            value={contraseñaRegist}
                        />
                    </div>

                    <Button variant="outline-info" type="submit" onClick={message}>Iniciar Sesión</Button>
                </form>


            </div>

        </>
    );
};

export default Form;