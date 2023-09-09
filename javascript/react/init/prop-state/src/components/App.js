import React from 'react';
// Switch renderea el primero hijo que haga match , si no hay una ruta definida 
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Info from '../pages/info';
import Infonew from '../pages/Infonew';
import NotFound from '../pages/notFound';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/info" component={Info} />
                <Route exact path="/info/new" component={Infonew} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}
export default App