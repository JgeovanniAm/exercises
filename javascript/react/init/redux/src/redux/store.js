import { createStore } from 'redux';
import favoriteReducers from './favorite/favoriteReducers';

export default createStore(favoriteReducers);
