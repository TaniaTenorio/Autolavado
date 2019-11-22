import React, { Component } from 'react';

import Button from '../components/Button';

class ServiceLocationView extends Component {
    render() {
        return (
            <section>
                <h1>Indica dónde está tu auto</h1>
                <article>
                    <Button text={"Calle"} />
                    <p>  Utilizaremos la ubicación que proporcionaste en el mapa. Tu güasher comenzará a lavar tu auto en cuanto llegue al destino.</p>
                    <Button text={"Adentro de un inmueble"} />
                    <p>Debes estar al pendiente de la llegada de tu güasher para darle acceso a tu vehículo.</p>
                </article>
                <Button text={"Siguiente"} />
            </section>
        )
    }
};

export default ServiceLocationView;