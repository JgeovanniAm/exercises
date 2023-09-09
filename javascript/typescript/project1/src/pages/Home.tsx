import React, { useState, useEffect } from 'react';
import Nav from '../components/nav/';
import Sortby from '../components/sortby/';
import service from '../services';
import Card from '../components/card';
import InfoDeaths from '../components/carddeath';
import './styles.css';

export default () => {
    const [sortData, setSortData] = useState<Array<any>>([]);
    const [collectDeaths, setCollectDeaths] = useState<Array<any> | null>(null);
    // main data of my API
    const [data, setData] = useState<Array<any>>([]);
    // this state is my all view : name ... and It will display these elements
    const [view, setView] = useState<string>('default');
    // this state is a number that It will increment to indicate my endpoint, how many cards I will display in my App
    let [numCharacter, setNumCharacter] = useState<number>(6);

    useEffect(() => {
        service(`https://www.breakingbadapi.com/api/characters?limit=${numCharacter}&offset=${0}`)
            .then(result => {
                setData(result)
            });
    }, [numCharacter])

    /**
     * 
     * @param e:HandleId is the element that I have clicked
     */

    interface HandleId {
        target: HTMLButtonElement;
    }
    interface handleOjectsort {
        portrayed: string
        name: string
    }

    function sortByName(e: HandleId) {
        let resultSortName: any[];
        setView(e.target.id);
        if (e.target.id === 'portrayer') {
            resultSortName = data.sort((a: handleOjectsort, b: handleOjectsort) =>
                a.portrayed.toLowerCase() > b.portrayed.toLowerCase() ? 1 :
                    a.portrayed.toLowerCase() < b.portrayed.toLowerCase() ? -1 : 0
            );
        } else {
            resultSortName = data.sort((a: handleOjectsort, b: handleOjectsort) =>
                a.name.toLowerCase() > b.name.toLowerCase() ? 1 :
                    a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 0
            );
        }

        // result of my sortby... functions and it will change the state
        setSortData(resultSortName);
    }

    /**
     * 
     * @function incrementCard it will show more cards and increment a number and change the state of my view
     */
    function incrementCard() {
        setView('default');
        setNumCharacter(numCharacter += 3);
        numCharacter > 100 && setNumCharacter(6);
    }

    /**
     * @function CollectInfoCard it will do a new request of my API and It will display the deaths
     * @param object is the target and info of my card that I have hovered and It will display the total deaths
     */
    function CollectInfoCard(object) {
        service(`https://www.breakingbadapi.com/api/deaths`)
            .then(result => {
                const filterItems = result.filter(item => item.responsible.toLowerCase() === object.name.toLowerCase())
                // it will do a filter of the data and it display all the coincidences of my object param
                filterItems ? setCollectDeaths(filterItems) : setCollectDeaths(null);
            });
    }

    return (
        <div>
            <Nav />
            <h1>sortby</h1>
            <Sortby funcSortby={sortByName} />
            <div className="wrapper-cards">
                <div className="allcard">
                    {view === 'default' && data
                        ? data.map(item => <Card key={item.id} result_item={item} funcCollect={CollectInfoCard} />)
                        : sortData.map(item => <Card key={item.id} result_item={item} funcCollect={CollectInfoCard} />)
                    }
                </div>
                <div className="info-death">
                    total deaths: {collectDeaths == null ? 0 : collectDeaths.length}
                    {
                        collectDeaths == null ? 'deaths...'
                            : collectDeaths.length > 0
                                ? collectDeaths.map(item => <InfoDeaths key={item.id} resultDeath={item} />)
                                : "- no murder -"
                    }
                </div>
            </div>
            <button onClick={incrementCard} className="btn-more"> more cards </button>
        </div>
    )
}