import React, { Component } from 'react';

import Button from '../components/Button';

class GuasherView extends Component {
    render() {
        return(
            <section>
                <h1>¿Quién va a lavar tu auto?</h1>
                <article>
                    <figure>
                        <img src="" alt="güasher"/>
                        <Button text={"Contactar"} />
                    </figure>
                </article>
                <article>
                    <ul>
                        <li>Güasher: Saúl Villa Martínez</li>
                        <li>No. servicios: 122</li>
                        <li>Puntualidad: 100 servicios a tiempo</li>
                        <li>Calificaciones: <i></i>115</li>
                    </ul>
                    <figure>
                        <img src="" alt="burbujas"></img>
                    </figure>
                    <Button text={"Aceptar"} />
                </article>
            </section>
        )
    }
};

export default GuasherView;