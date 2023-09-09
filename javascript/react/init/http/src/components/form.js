import React from 'react'
import { Link, Redirect , withRouter } from 'react-router-dom';

class Form extends React.Component {
    /* constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        console.log(this)
    }
    // lo mismo pero suggarSintax
    handleClick = () =>{
        console.log(this)
    }
    render() {
     return (  <button onClick={this.handleClick} >
            send
    </button>)
    }*/

    constructor(props) {
        super(props)
        this.state = {};
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state)
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <form
                onSubmit={this.handleSubmit}
            >
                <input
                    placeholder="nombre"
                    type="text"
                    name="name"
                    onChange={this.handleChange}
                    value={this.state.name}
                />
                <input
                    placeholder="level"
                    type="text"
                    name="level"
                    onChange={this.handleChange}
                    value={this.state.level}
                />

                <input
                    placeholder="id"
                    type="text"
                    name="id"
                    onChange={this.handleChange}
                    value={this.state.id}
                />
                <input
                    type="submit" />
                
                <button onClick = {() => this.props.history.push('/hi')}> 
                hi
                </button>
            </form>
            )
        }
    }
    
export default withRouter(Form)