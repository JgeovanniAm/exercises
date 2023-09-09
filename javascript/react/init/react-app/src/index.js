// React DOM
// React JSX forma de escribir jsvascript en react

import React from 'react';
import ReactDOM from 'react-dom';

const user = {
    name : "jimmy",
    lastname: "alvarez",
}

function getName(user){
    return `${user.name} , ${user.lastname}`
}

function getGretting(user){
    if(user){
        return <h1>Hello {getName(user)}</h1>
    }
    return <h1>Mae no lo saludo porque eres desconocido</h1>
}


const container = document.getElementById('root');

// react dom tiene un method Render
// RENDER( QUE , DONDE )

ReactDOM.render(getGretting(user) , container)
