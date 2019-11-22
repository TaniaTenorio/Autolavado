import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import BtnWhite from '../components/BtnWhite'

class ScheduleView extends Component {
    render() {
        return (
            <section className="schedule-view">
                <h1>¿Cuándo deseas recibir tu servicio?</h1>
                <Link to="/VehicleForm">
                    <BtnWhite text={"Ahora"} />
                </Link>
                <Link>
                    <BtnWhite text={"En otro momento"} />
                </Link>
            </section>
        )
    }
};

export default ScheduleView;