import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'react-bootstrap';
import { HashRouter, Route, BrowserRouter as Router } from 'react-router-dom';
import { Switch } from 'react-router-dom'

import './index.css';
import App from './sites/App';
import All from './sites/all';
import Fav from './sites/favorite';
import Croatia from './country/Croatia/croatia';
import Nuernberg from './country/Germany/Nuernberg/nuernberg';
import Prague from './country/Czech/prague';
import NotFound from './sites/notFound';

import * as serviceWorker from './serviceWorker';




const routing = (
    <Container>

        <Router>

            <HashRouter basename="/">
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route exact path="/all" component={All} />
                    <Route exact path="/favorite" component={Fav} />
                    <Route path="/croatia" component={Croatia} />
                    <Route path="/nuernberg" component={Nuernberg} />
                    <Route path="/prague" component={Prague} />
                    <Route component={NotFound} />
                </Switch>
            </HashRouter>

        </Router>

    </Container>
)



ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
