import React, { Component } from 'react';

import Button from '../components/Button';

class PaymentMethodView extends Component {
    render() {
        return(
            <section>
                <h1>Elige tu forma de pago</h1>
                <article>
                    <Button text={"Tarjeta"} />
                    <p>Crédito o débito</p>
                    <Button text={"Efectivo"} />
                </article>
                <Button text={"siguiente"} />
            </section>
        )
    }
};

export default PaymentMethodView;