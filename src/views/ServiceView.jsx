import React, { Component } from 'react';
import Button from '../components/Button';

class ServiceView extends Component {
    render() {
        return(
            <section>
                <article>
                    <h1>Selecciona tu servicio</h1>
                    <Button text={"Básico"} />
                    <p>Limpieza de exteriores: corrocería, vidrios, llantas y rines</p>
                    <p>Duración aprox: 20-35 min</p>
                    <Button text={"Completo"} />
                    <p>Básico + más limpieza y aspirado de interiores</p>
                    <p>Duración aprox: 40 -50 min</p>
                    <Button text={"personalizado"} />
                    <p>Arma tu propio paquete con los servicios que deseas (pulido, encerado, etc.)</p>
                </article>
                <Button text={"Siguiente"} />
            </section>
        )
    }
};

export default ServiceView;