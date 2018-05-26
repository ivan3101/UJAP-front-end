import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NotFound from "./not-found";
import Home from "./home";

class App extends Component {
    render = () => (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route component={NotFound}/>
                </Switch>
            </div>
        </Router>
    )
}

export default App;