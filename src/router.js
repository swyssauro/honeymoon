import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Importando Paginas
import Home from './pages/Home';
import Honeypoints from './pages/Honeypoints';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/honeypoints" component={Honeypoints} />
            </Switch>
        </BrowserRouter>
    );
}