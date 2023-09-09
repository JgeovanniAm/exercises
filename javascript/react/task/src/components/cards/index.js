import React from 'react';
import Button from './btn'
import './styles.css';
export default ({ tasks, removeCard, dependingFunc, completedFunc }) => ( 
  tasks.map((item, index) => {
    return (
      <div className="card">
        <div className="header">
          <h1> {item.name} </h1>
          <button id={index} onClick={removeCard} >x</button>
          <Button key={index} data={item} index={index} dependingFunc={dependingFunc} completedFunc={completedFunc}  />
        </div>
        <div className="content">
          <h1>time: {item.time} </h1>
          <h1>date: {item.date} </h1>
          <h1>d3xription: {item.description} </h1>
        </div>
      </div>
    )
  })
);