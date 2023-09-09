import React from 'react';
import AddFavourite from '../AddFavourite';
import './card.css';

interface cardProp {
    result_item: any 
    funcCollect:(event: React.MouseEvent<HTMLDivElement>) => any
}

export default ({ result_item, funcCollect }:cardProp) => (
    <div onMouseOver={() => funcCollect(result_item)} className="card-Portrayer">
        <img className="card-Portrayer__img" src={result_item.img} alt="" />
        <h1 className="card-Portrayer__name">{result_item.name} </h1>
        <h2> {result_item.occupation[1]} </h2>
        <h2> {result_item.status}</h2>
        <h2> {result_item.birthday}</h2>
        <AddFavourite items={result_item} />
    </div>
);