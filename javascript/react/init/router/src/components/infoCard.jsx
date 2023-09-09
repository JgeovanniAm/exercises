import React from 'react';
import { Link } from 'react-router-dom';
import './cards.css';

export default ({ cardsInfo, section }) => {
  let urlLink = section === 'home' ? '/' : '/favorite';
  return (
    <div className="wrapper-card">
      <Link to={`${urlLink}`}>home</Link>
      <div className="card">
        <img src={cardsInfo.imageUrl} alt="card-info" />
        <h1>{cardsInfo.name}</h1>
        <p>{cardsInfo.set}</p>
        <p>{cardsInfo.supertype}</p>
      </div>
    </div>
  )
}