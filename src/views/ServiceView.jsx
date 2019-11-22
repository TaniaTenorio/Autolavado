import React, { Component } from 'react';
import BtnWhite from '../components/BtnWhite';
import '../components/Components.css'
import Button from '../components/Button'

class ServiceView extends Component {
    render() {
        return(
            <section>
                <article className="art-service">
                    <h1 className="text-title-service">Selecciona tu servicio</h1>
                    <BtnWhite text={"Básico"} className="text-black"/>
                    <p>Limpieza de exteriores: corrocería,<br></br> vidrios, llantas y rines</p>
                    <p>Duración aprox: 20-35 min</p>
                    <BtnWhite text={"Completo"} />
                    <p>Básico + más limpieza y <br></br>aspirado de interiores</p>
                    <p>Duración aprox: 40 -50 min</p>
                    <BtnWhite text={"personalizado"} />
                    <p>Arma tu propio paquete con los servicios<br></br> que deseas (pulido, encerado, etc.)</p>
                </article>
                <Button text={"Siguiente"} />
            </section>
        )
    }
};

export default ServiceView;