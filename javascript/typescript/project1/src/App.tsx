import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './pages/Home';
import Episodes from './pages/Episodes';
import Favourite from './pages/Favorite';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" render={() => <Provider store={store}> <Home /> </Provider>} exact />
        <Route path="/episodes" component={Episodes} />
        <Route path="/favourite" render={() => <Provider store={store}> <Favourite /></Provider>} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
