import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

export default () => {
    return (
        <nav className="nav-component">
            <ul className="nav-component__list">
                <li className="nav-component__item"><Link to="/">home</Link></li>
                <li className="nav-component__item"><Link to="/episodes">episodes</Link></li>
                <li className="nav-component__item"><Link to="/favourite">favourite</Link></li>
            </ul>
        </nav>
    )
}