import React from 'react';
import skullImg from '../imagenes/skull.png';
import  '../styles/Card.css';

class Card extends React.Component {
    render(){
        return ( 
            <div className="wrapper">
                <div className="wrapper-image">
                    <img className="image" src= {skullImg} />
                </div>
                <div>
                    <h1 className="text">Skull Jimmy Alvarez</h1>
                    <p className="text">Es importante saber que los humanos son locos por naturaleza y nadie sabe el porque</p>
                </div>
            </div>
        )
    }
}
export default Card