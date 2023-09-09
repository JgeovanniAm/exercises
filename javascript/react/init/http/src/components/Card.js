import React from 'react';
import skullImg from '../imagenes/skull.png';
import '../styles/Card.css';
import hiImg from '../imagenes/human.jpg';
/*this.props accedo y los declaro en mi componente
    <Card
    title="Skull Jimmy Alvarez"
    link="Es importante saber que los humanos son locos por naturaleza y nadie sabe el porque"
/>
*/

// para acceder a los state ocupo un constructor y acceder a con el super de la clase super

class Card extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            title:"Skull Jimmy Alvarez"
        }
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                title:"MAE creo que Cambió!"
            })
        },5000)
    }

    render() {
        return (
            <div className="wrapper"
                // estilos en linea react con 2 llaves
                style={{
                    backgroundImage: `url(${hiImg})`,
                    backgroundRepeat: 'no-repeat',
                }}
                >
                styles
                <div className="wrapper-image">
                    <img className="image" src={skullImg} alt="logo"/>
                </div>
                <div>
                    <h1 className="text">{this.state.title}</h1>
                    <p className="text">{this.props.link}</p>
                </div>
            </div>
        )
    }
}
export default Card