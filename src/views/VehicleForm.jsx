import React, { Component } from 'react';


import Form from '../components/Form';

class VehicleForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Marca:'',
            Modelo:'',
            Placas: '',
            Color: ''
        }
    };

    onChangeHandler = e => {
        //console.log(e.target.value);
        this.setState({
          [e.target.name]: e.target.value
          //[e.target.number]: e.target.value
        });
      };

      onSubmit = e => {
        e.preventDefault();
        localStorage.setItem('cars', JSON.stringify(this.state));
        this.props.history.push('/service');
        console.log(JSON.parse(localStorage.getItem('cars')));
        //this.props.agregarClientes(this.state.name);
      };
    render() {
        return(
            <div>
                <Form 
                title={"Proporciona los datos de tu auto"}
                text1={"Marca"}
                text2={"Modelo"}
                text3={"Placas"}
                text4={"Color"}
                brand={this.state.brand}
                model={this.state.model}
                carPlates={this.state.carPlates}
                color={this.state.color}
                type={"text"}
                onChangeHandler={this.onChangeHandler}
                onSubmitHandler={this.onSubmit}
                class={"block"}
                />
            </div>
        )
    }
};

export default VehicleForm;