import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import actionFavorite from '../../redux/favorite/favoriteAction';

export default ({ items }:any) => {
  const dispatch = useDispatch();
  const data_favorite = useSelector(state => state.data_favorite);
  const [toggle, setToggle] = useState<boolean>(false);

  function handleClick(item:any) {
    setToggle(!toggle);
    // it will pass a object targeted to my reducer redux
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