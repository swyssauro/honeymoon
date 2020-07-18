import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Importando Paginas
import Home from './pages/Home';
import LocalForm from './pages/LocalForm';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/identificação" component={LocalForm} />
            </Switch>
        </BrowserRouter>
    );
}