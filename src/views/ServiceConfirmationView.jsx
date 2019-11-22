import React, { Component } from 'react';

import Button from '../components/Button';

class ServiceConfirmationView extends Component {
    render() {
        return(
            <section>
                <h1>Resumen de tu compra</h1>
                <article>
                    <h6>DIRECCIÓN DE TU SERVICIO</h6>
                    <p>Tonalá 10</p>
                    <p>Roma Norte</p>
                    <p>Cuauhtémoc</p>
                    <figure>
                        <img src='' alt='map'></img>
                    </figure>
                </article>
                <article>
                    <ul>
                        <li>Paquete Básico</li>
                        <li>Volkswagen Bora</li>
                        <li>Placas ***-AAA</li>
                        <li>Pago en efectivo</li>
                    </ul>
                    <p>$50</p>
                </article>
                <Button text={"Confirmar"} />
            </section>
        )
    }
};

export default ServiceConfirmationView;