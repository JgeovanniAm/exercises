import React from 'react';
import '../styles/Card.css';

class Card extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nombre: "",
            email: "",
            mensaje: ""
        }
        this.btn = React.createRef()
    }

    handleSubmit = e => {
        e.preventDefault()
        if(Object.keys(this.state).length === 0 || this.state.nombre === "" || this.state.mensaje === "" || this.state.email === "" ) {
            alert('termine de completar el formulario porfavor')
        }
        else this.sendPost(this.state);
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    sendPost(data) {
        fetch(`http://localhost:5000/send`,
            {
                method: 'POST',
                body: JSON.stringify(data),
            })
            .then(response => {
                console.log(response.json);
                return response.json();
            })
            .then(json => {
                console.log(json);
            })
            .catch(err => {
                console.log(err);
            });
        alert('gracias por enviar su mensaje, me pondre en contacto contigo!')
    }

    render() {
        return (
            <React.Fragment>
                <h1 className="title">Contact</h1>
                <div className="wrapper">
                    <form className="form-ui">
                        <input
                            type="text"
                            placeholder="Nombre Completo"
                            name="nombre"
                            onChange={this.handleChange}
                            value={this.state.nombre}
                        />
                        <input
                            type="email"
                            placeholder="Correo electrónico"
                            name="email"
                            onChange={this.handleChange}
                            value={this.state.email}
                        />
                        <textarea
                            placeholder="Su mensaje"
                            name="mensaje"
                            onChange={this.handleChange}
                            value={this.state.mensaje}
                        />
                        <input
                            className="send"
                            type="submit"
                            value="Send"
                            ref  = {this.btn}
                            onClick={this.handleSubmit}
                        />
                    </form>
                </div>
            </React.Fragment>
        )
    }
}
export default Card