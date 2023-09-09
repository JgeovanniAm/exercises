import React from 'react';
import './cardEpisodes.css';

/**
 * @param filterData is the result array of my filter data by season
 */
export default ({ filterData }) => (
    filterData.map(item => {
        return (
            <div key={item.id} className="episodes" >
                <h1>{item.title} </h1>
                <h2> {item.season} </h2>
                <h2> {item.episode}</h2>
                <h2> {item.air_date}</h2>
            </div>
        )
    })
);