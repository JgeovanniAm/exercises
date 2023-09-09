import React from 'react';
import { useSelector } from 'react-redux';

export default () => {
  // use of my redux store
  const data_favorite = useSelector(state => state.data_favorite);
  return (
    data_favorite.map(item =>
      <div key={item} className="card-Portrayer">
        <img className="card-Portrayer__img" src={item.img} alt="" />
        <h1 className="card-Portrayer__name">{item.name} </h1>
        <h2> {item.occupation[1]} </h2>
        <h2> {item.status}</h2>
        <h2> {item.birthday}</h2>
      </div>
    )
  )
}