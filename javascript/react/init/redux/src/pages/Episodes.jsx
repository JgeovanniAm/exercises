import React, { useState, useEffect } from 'react';
import Nav from '../components/nav/';
import Filters from '../components/filters';
import CardEpisodes from '../components/cardEpisodes';
import service from '../services';

export default () => {
    // this state is my all view : season1 ... and It will display these elements
    const [targetView, setTargetView] = useState('season-4');
    // main data of my endpoint response APi
    const [resultEpisodes, setResultEpisodes] = useState([]);

    useEffect(() => {
        service(`https://www.breakingbadapi.com/api/episodes`)
            .then(result => {
                setResultEpisodes(result);
            });
    }, []);

    // my buttons will change the filter and view.
    function targetSeason({ target }) {
        setTargetView(target.id);
    }

    return (
        <div>
            <Nav />
            <Filters funcSeason={targetSeason} />
            <div className="allseason-card">{
                resultEpisodes &&
                <CardEpisodes 
                    key="episodes"
                    /**
                     * @prop filterData depending of  my state view it will do a filter by season
                     */
                    filterData={
                        targetView === 'season-1' ? resultEpisodes.filter(item => item.season === '1') :
                        targetView === 'season-4' ? resultEpisodes.filter(item => item.season === '4') :
                        resultEpisodes.filter(item => item.season === '2')
                    } 
                />
            }</div>
        </div>
    )
}