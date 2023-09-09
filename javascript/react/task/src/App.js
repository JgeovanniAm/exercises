import React, { useState } from 'react';
import Panel from './components/panel/';
import FormTask from './components/formTask/';
import Cards from "./components/cards/";
import Modal from "./components/modal/";
import './index.css';

export default (props) => {
  let [tasks, setTasks] = useState([]);
  let [targetDisplayView, setTargetDisplayView] = useState('create');
  let [openModal, setOpenModal] = useState(false);
  /**
   * @param {*} object is my result of my inputs and is processed my object 
   */
  const collectTask = (object) => {
    if (object) {
      const findObject = tasks.find(x => x.name === object.name);
      if (!findObject) setTasks([...tasks, object]);
      setOpenModal(true);
    }
  }

  const closemodal = (id) => {
    // target: of my modal
    id === 'add' && setOpenModal(false);
    if (id === 'showAll') {
      setOpenModal(false);
      setTargetDisplayView('allTasks');
    }
  }

  // use persist to mi event get keept in my method

  const displayViews = (e) => {
    e.persist();
    setTargetDisplayView(targetDisplayView = e.target.id);
  }

  const removeCard = (e) => {
    tasks.splice(parseFloat(e.target.id), 1)
    const array = [...tasks];
    setTasks(array);
  }

  const completed = (id) => {
    const completed = { completed: 'completed' }
    Object.assign(tasks[id], completed);
    const data = [...tasks];
    setTasks(data);
  }

  const depending = (id) => {
    delete tasks[id].completed;
    const data = [...tasks];
    setTasks(data);
  }

  return (
    <div className="app">
      <div>
        <Panel displayViews={displayViews} />
      </div>
      <div className="content">
        {
          targetDisplayView === "create" ? <FormTask collectTask={collectTask} /> :
            <Cards
              tasks={
                targetDisplayView === 'pending' ? tasks.filter(x => !x.completed) :
                  targetDisplayView === 'completed' ? tasks.filter(x => x.completed) : tasks
              }
              removeCard={removeCard}
              dependingFunc={depending}
              completedFunc={completed}
            />
        }
        {
          openModal && <Modal closemodal={closemodal} />
        }
      </div>
    </div>
  )
}
