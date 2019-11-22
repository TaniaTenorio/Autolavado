import React, { Component } from 'react';

import Button from '../components/Button';
import Map from '../assets/map_roma.jpg'

class ServiceConfirmationView extends Component {
    render() {
        return(
            <section>
                <h1 className="text-title-service">Resumen de tu compra</h1>
                <article className="art-service">
                    <h6>DIRECCIÓN DE TU SERVICIO</h6>
                    <p>Tonalá 10</p>
                    <p>Roma Norte</p>
                    <p>Cuauhtémoc</p>
                    <figure>
                        <img src={Map} alt='map'></img>
                    </figure>
                </article>
                <article  className="art-service">
                    <ul>
                        <li>Paquete Básico</li>
                        <li>Volkswagen Bora</li>
                        <li>Placas ***-AAA</li>
                        <li>Pago en efectivo</li>
                    </ul>
                    <p>$50</p>
                </article>
                <article>
                    <p>El total de tu compra es $50</p>
                    <Button text={"Confirmar"} />
                </article>
            </section>
        )
    }
};

export default ServiceConfirmationView;