import React, { useState, useEffect } from 'react';
import './styles.css'
export default ({ index, dependingFunc, completedFunc, data }) => {
  let [btn, setbtn] = useState(false);

  function handleClick(e) {
    setbtn(!btn);
    btn ? dependingFunc(e.target.id) : completedFunc(e.target.id);
  }

  useEffect(() => {
    data.completed ? setbtn(true) : setbtn(false)
  })

  return (
    <button id={index} onClick={handleClick} >{btn ? 'completed' : 'pending'}</button>
  )
}