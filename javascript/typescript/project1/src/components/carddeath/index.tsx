import React from 'react';
import './carddeath.css';

export default ({ resultDeath }:any) => (
  <div className="card-death">
    <h2> {resultDeath.death} </h2>
    <h3> {resultDeath.cause} </h3>
    <h3> {resultDeath.responsible} </h3>
    <p> {resultDeath.last_words} </p>
  </div>
);