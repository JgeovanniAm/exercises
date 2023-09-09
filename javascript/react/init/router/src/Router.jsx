import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Details from './pages/details';
import Favorite from './pages/favorite'
import { PokeProvider } from './context';

export default () => {
  const [cardsFavorite, setCardsFavorite] = useState([]);

  const Addfavorite = (id, statebtn, object) => {
    if (statebtn) {
      const objectFound = cardsFavorite.findIndex(x => x.id === object.id);
      cardsFavorite.splice(objectFound, 1);
      setCardsFavorite([...cardsFavorite]);
    } else setCardsFavorite([...cardsFavorite, object]);
  }

  const object = {
    cardsFavorite: cardsFavorite,
    Addfavorite: Addfavorite,
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" render={() => <PokeProvider value={object}  > <Home /> </PokeProvider>} exact />
        <Route path="/:section/:id" render={(props) => <PokeProvider value={object}  > <Details {...props} /> </PokeProvider>} />
        <Route path="/favorite" render={() => <PokeProvider value={object}  > <Favorite /> </PokeProvider>} />
      </Switch>
    </BrowserRouter>
  )
};