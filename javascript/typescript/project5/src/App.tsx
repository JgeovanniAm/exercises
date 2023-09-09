import React from 'react';
import Header from './components/header';
import { Provider } from 'react-redux';
import store from './redux/store';
import ListIssues from './components/listIssue'
import './App.css';

const App: React.FC = () => (
  <Provider store={store}>
    <div className="App">
      <Header />
      <ListIssues/>
    </div>
  </Provider>
);

export default App;