import React from 'react';
import './styles.css';

const usePanel = ({displayViews}) => {
  return (
    <div className="wrapper">
      <button id="create" onClick={displayViews}>Create Nwe Task</button>
      <button id="allTasks" onClick={displayViews}>All tasks</button>
      <button id="pending" onClick={displayViews}>Pending Tasks</button>
      <button id="completed" onClick={displayViews}>Completed Tasks</button>
    </div>
  )
}

export default usePanel
