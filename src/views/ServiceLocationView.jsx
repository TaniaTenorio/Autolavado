import React, { Component } from 'react';

import Button from '../components/Button';
import BtnWhite from '../components/BtnWhite';

class ServiceLocationView extends Component {
    render() {
        return (
            <section>
                <h1 className="text-title-service">Indica dónde está tu auto</h1>
                <article  className="art-service">
                    <BtnWhite text={"Calle"} />
                    <p>  Utilizaremos la ubicación que proporcionaste <br></br>en el mapa. Tu güasher comenzará a lavar tu auto en cuanto llegue al destino.</p>
                    <BtnWhite text={"Adentro de un inmueble"} />
                    <p>Debes estar al pendiente de la llegada de tu güasher para darle acceso a tu vehículo.</p>
                    <br></br><br></br><br></br>
                </article>
                <Button text={"Siguiente"} />
            </section>
        )
    }
};

export default ServiceLocationView;