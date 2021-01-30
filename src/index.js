import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import './index.css';
import App from './App';
import Photography from './sections/Photography';
import Photographyflex from './sections/Photographyflex';
import Brand from './sections/Brand';


ReactDOM.render(
    <Router>
            <Switch>
                {/* <App /> */}
                <Route path="/" exact component={App} />
                <Route path="/photography" exact component={Photography} />
                <Route path="/photographyflex" exact component={Photographyflex} />
                <Route path="/brand" component={Brand} />
            </Switch>    
    </Router>,
    document.getElementById('root'));