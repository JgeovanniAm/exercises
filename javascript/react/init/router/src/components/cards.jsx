import React from 'react';
import { Link } from 'react-router-dom';
import Button from './btn';
import './cards.css';

const Cards = ({ to, item }) => (
  <div className="cards">
    <Link to={to}>
      <img src={item.url} alt={item.name} />
    </Link>
    <Button item={item} />
  </div>
);

export default  Cards;