import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import actionFavorite from '../../redux/favorite/favoriteAction';

export default ({ items }) => {
  const dispatch = useDispatch();
  const data_favorite = useSelector(state => state.data_favorite);
  const [toggle, setToggle] = useState(false);

  function handleClick(item) {
    setToggle(!toggle);
    toggle ? dispatch(actionFavorite.deleteFavorite(item)) : dispatch(actionFavorite.addFavorite(item))
  }
 
  useEffect(() => {
    data_favorite.forEach(element => {
      element.char_id === items.char_id && setToggle(true);
    });
  },[])

  return (
    <button onClick={() => handleClick(items)}>{toggle ? 'delete' : 'addFavorite'}</button>
  );
}