import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';

class GuasherView extends Component {
    render() {
        return(
            <section>
                <h3>¿Quién va a lavar tu auto?</h3>
                <article style={
                    { display: 'flex',
                      flexDirection: 'column',
                      alignContent: 'center'
                }
                }>
                    <figure style={{ display: 'flex', flexDirection: 'column', alignContent: 'center'}}>
                        <img style={{width: '10rem', margin:'auto'}} src="./assets/Güasher.png" alt="güasher"/>
                    </figure>
                        <Button text={"Contactar"} />
                </article>
                <article>
                    <ul>
                        <li>Güasher: Saúl Villa Martínez</li>
                        <li>No. servicios: 122</li>
                        <li>Puntualidad: 100 servicios a tiempo</li>
                        <li>Calificaciones: <i></i>115</li>
                    </ul>
                    <figure>
                        <img src="./assets/Bubbles.png" alt="burbujas"></img>
                    </figure>
                    <Link to="/follow">
                        <Button text={"Aceptar"} />
                    </Link>
                </article>
            </section>
        )
    }
};

export default GuasherView;