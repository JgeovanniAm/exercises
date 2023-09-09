import { createStore } from 'redux';
import issueReducer from './issues/issueReducer';

export default createStore(issueReducer);