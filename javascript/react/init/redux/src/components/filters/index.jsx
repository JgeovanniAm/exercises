import React from 'react';
import './filter.css';

export default ({ funcSeason }) => (
  <div className="filters">
    <button id="season-4" onClick={funcSeason}>season 4</button>
    <button id="season-1" onClick={funcSeason}>season 1</button>
    <button id="season-2" onClick={funcSeason}>season 2</button>
  </div>
);