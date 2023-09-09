import React from 'react';
import './style.css';

export default ({ closemodal }) => {
  function handleClick(e){
    closemodal(e.target.id);
  }
  return (
    <div className="modal">
      <button id="add" onClick={handleClick}>add</button>
      <button id="showAll" onClick={handleClick}>show all tasks</button>
    </div>
  )
}
