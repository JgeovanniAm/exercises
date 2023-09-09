import React, { useState, useEffect, useContext } from 'react';
import PokeContext from '../context';
import './cards.css';

export default ({ item }) => {
  const [toggle, setToggle] = useState(false);
  const { cardsFavorite, Addfavorite } = useContext(PokeContext);

  const handleClick = ({ target }) => { // this function will pass some arguments and it will be used in my context
    setToggle(!toggle);
    Addfavorite(
      target.id,
      toggle,
      item.object);
  }

  useEffect(() => {
    cardsFavorite.forEach(element => {
      element.id === item.id && setToggle(true);
    });
  });

  return <button id={item.id} onClick={handleClick} >{toggle ? 'remove' : 'add'}</button>;
};