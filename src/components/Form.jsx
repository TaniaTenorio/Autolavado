import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Button from './Button';

class Form extends Component {
    render() {
        return(
            <React.Fragment>
                <h1>Bienvendio</h1>
                <form>
                    <fieldset>
                        <legend>Registro</legend>
                        <label name="phone-number">
                            <input type="text" placeholder="teléfono"></input>
                        </label>
                        <label name="email">
                            <input type="email" placeholder="correo electrónico"></input>
                        </label>
                        <label>
                            <input type="password" placeholder="contraseña"></input>
                        </label>
                        <Link to="/Home">
                        <Button />
                    </Link>
                    </fieldset>
                    <fieldset>
                        <label>Iniciar Sesión</label>
                        <label name="phone-or-mail">
                            <input type="text" placeholder="telefono/correo"></input>
                        </label>
                        <label>
                            <input></input>
                        </label>
                        <Link to="/Home">
                            <Button />
                        </Link>
                    </fieldset>
                </form>
            </React.Fragment>
        )
    }
};

export default Form;