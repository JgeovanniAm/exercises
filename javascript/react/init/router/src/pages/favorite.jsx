import React, {
  useContext
} from 'react';
import {Link} from 'react-router-dom';
import Cards from '../components/cards';
import PokeContext from '../context';
import './index.css';

export default () => {
  const { cardsFavorite } = useContext(PokeContext);
  const status = 'favorite';

  return (
    <>
    <h1>Favoritos pokeRatas</h1>
    <Link to="/">volver</Link>
    <div className="all">
      {cardsFavorite.length > 0
        ?
        cardsFavorite.map((i, index) => <Cards key={index} to={`/${status}/${i.id}`} item={{ object: i, url:i.imageUrl, id:i.id}} />)
        : <p>no hay cartas favoritos</p>
      }
    </div>
  </>
  )
}