import React, { Component } from 'react';

import Button from '../components/Button';
import BtnWhite from '../components/BtnWhite'

class PaymentMethodView extends Component {
    render() {
        return(
            <section>
                <h1>Elige tu forma de pago</h1>
                <article>
                    <BtnWhite text={"Tarjeta"} />
                    <p>Crédito o débito</p>
                    <BtnWhite text={"Efectivo"} />
                </article>
                <Button text={"siguiente"} />
            </section>
        )
    }
};

export default PaymentMethodView;