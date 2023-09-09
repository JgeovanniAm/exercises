import React from 'react';

export default (props) =>  <button onClick={() => props.changeState()} > {props.favorite_state ? 'ver todas las cartas':'ver favoritos'}</button>
