import React, { Component } from 'react';

import Button from './Button';

class Form extends Component {

    constructor(props){
        super(props)
        this.state = {
          name: '',
          email:'',
          phoneNumber: '',
          password:''
        }
      }
      
      onChangeHandler = e => {
        //console.log(e.target.value);
        this.setState({
            [e.target.name]: e.target.value,
            //[e.target.number]: e.target.value
        })
    }

    onSubmit = e => {
        e.preventDefault();
        localStorage.setItem('clientes', JSON.stringify(this.state));
        // this.props.history.push('/Sidebar');
        console.log(JSON.parse(localStorage.getItem('clientes')));
        //this.props.agregarClientes(this.state.name);
    }

    render() {

        return(
            <React.Fragment>
                <h1>Bienvendio</h1>
                <form>
                    <fieldset>
                        <legend>Registro</legend>
                        <label name="text">
                            <input 
                                name="name"
                                type="text" 
                                placeholder="Nombre"
                                value={this.state.name}
                                onChange={this.onChangeHandler}
                            ></input>
                                
                        </label>
                        <label name="phone-number">
                            <input 
                                name="phoneNumber"
                                type="text" 
                                placeholder="Teléfono"
                                value={this.state.phone}
                                onChange={this.onChangeHandler}
                                ></input>
                        </label>
                        <label name="email">
                            <input 
                                name="email"
                                type="email" 
                                placeholder="Correo electrónico"
                                value={this.state.email}
                                onChange={this.onChangeHandler}
                            ></input>
                        </label>
                        <label>
                            <input 
                            name="password"
                            type="password" 
                            placeholder="Contraseña"
                            value={this.state.password}
                            onChange={this.onChangeHandler}
                            ></input>
                        </label>
                        <label>
                            <input 
                                name="password"
                                type="password" 
                                placeholder="Confirmar contraseña"
                                value={this.state.password}
                                onChange={this.onChangeHandler}
                            ></input>
                        </label>
                        <label>
                            <input type="checkbox"></input>
                            Acepto términos y condiciones
                        </label>
                        <Link to="/Home">
                        <Button submit={this.onSubmit}/>
                    </Link>
                    </fieldset>
                    <fieldset>
                        <legend>Iniciar Sesión</legend>
                        <label name="phone-or-mail">
                            <input type="text" placeholder="Telefono o correo"></input>
                        </label>
                        <label name="phone-or-mail">
                            <input type="password" placeholder="Contraseña"></input>
                        </label>
                        <label>
                            <input></input>
                        </label>
                        <Link to="/Home">
                            <Button />
                        </Link>
                    </fieldset>
                </form>
                
            </React.Fragment>
        )
    }
};


            <Button />
          </fieldset>
          <fieldset>
            <label>Iniciar Sesión</label>
            <label name='phone-or-mail'>
              <input type='text' placeholder='telefono/correo'></input>
            </label>
            <label>
              <input></input>
            </label>
            <Button />
          </fieldset>
        </form>
      </React.Fragment>
    );
  }
}

export default Form;
