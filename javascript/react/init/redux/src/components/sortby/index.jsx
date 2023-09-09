import React from 'react';
import './sortby.css';
// Birthday is unKnown
export default ({ funcSortby }) => (
    <div className="wrapper-sortby">
        <button id="name" onClick={funcSortby}>Name</button>
        <button id="birthday">Birthday</button>
        <button id="portrayer" onClick={funcSortby}>Portrayer</button>
    </div>
);
