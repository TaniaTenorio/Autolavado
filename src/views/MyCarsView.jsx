import React, { Component } from 'react';

import Button from '../components/Button';


class MyCarsView extends Component {
    render() {
        return(
            <section>
                <article>
                    <h1>Mis autos</h1>
                    <p>Recuerda que puedes registrar máximo 5 autos</p>
                </article>
                <article>
                    <ul>
                        <li>Volkswage</li>
                        <li>Bora</li>
                        <li>Negro</li>
                        <li>Placas: ***AAA</li>
                    </ul>
                </article>
                <Button text={"Agregar"} />
            </section>
        )
    }
};

export default MyCarsView;
