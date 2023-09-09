import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Cards from '../components/cards';
import mydata from '../services';
import Search from '../components/search';
import './index.css';

export default () => {
  const [cards, setCards] = useState([]);
  const [searchCards, setsearchCards] = useState([]);
  const [valueinput , setvalueinput] = useState('');
  const status = 'home';
  let data;

  const search = ({ target }) => {
    let array = cards.filter(item => (item.name.toLowerCase().indexOf(target.value) > -1));
    setsearchCards(array);
    setvalueinput(target.value);
  }

  useEffect(() => {
    mydata().then(result => {
      setCards(result.cards);
    })
  }, []);
  
  // data is cards or search data
  valueinput === ''  ? data = cards : data = searchCards;
  return (
    <>
      <h1>jimmy alvarez</h1>
      <Search searchMethod={search} />
      <Link to="/favorite">favorite</Link>
      <div className="favorite">
        {data.length > 0
          ?
          data.map((i, index) => <Cards key={index} to={`/${status}/${i.id}`} item={{ object: i, url: i.imageUrl, id: i.id }} />)
          : <p>loading</p>
        }
      </div>
    </>
  )
}