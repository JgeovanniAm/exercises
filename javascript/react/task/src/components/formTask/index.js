import React, { useState } from 'react';
import './styles.css';

const useFormTask = ({ collectTask }) => {
  const [dataOject, setdataOject] = useState({ name: '', date: '', time: '', description: '' })

  const handleonChange = (e) => {
    const inputValue = e.target;
    setdataOject({ ...dataOject, [inputValue.id]: inputValue.value });
  }

  const handleClick = () => {
    if (dataOject.name === "" || dataOject.date === "" || dataOject.time === "" || dataOject.description === "") alert('complete el formulario')
    else {
      collectTask(dataOject);
      let inputs = document.querySelectorAll('input');
      inputs.forEach(element => element.value = "");
    }
  }

  return (
    <div className="wrapper-form">
      <h1>create new TODO</h1>
      <form className="form">
        <input onChange={handleonChange} id="name" type="text" placeholder="tasks name" />
        <input onChange={handleonChange} id="date" type="date" />
        <input onChange={handleonChange} id="time" type="time" name="hora" max="22:30:00" min="10:00:00" step="1"></input>
        <input onChange={handleonChange} type="text" id="description" />
        <input onClick={handleClick} type="button" value="submit" />
      </form>
    </div>
  )
}

export default useFormTask
