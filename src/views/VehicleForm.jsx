import React, { Component } from 'react';


import Form from '../components/Form';

class VehicleForm extends Component {
    render() {
        return(
            <div>
                <Form 
                text1={"Marca"}
                text2={"Modelo"}
                text3={"Placas"}
                text4={"Color"}
                class={"block"}
                />
            </div>
        )
    }
};

export default VehicleForm;