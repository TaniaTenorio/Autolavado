import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';

class ScheduleView extends Component {
    render() {
        return (
            <section className="schedule-view">
                <h1>¿Cuándo deseas recibir tu servicio?</h1>
                <Link to="/VehicleForm">
                    <Button text={"Ahora"} />
                </Link>
                <Link>
                    <Button text={"En otro momento"} />
                </Link>
            </section>
        )
    }
};

export default ScheduleView;