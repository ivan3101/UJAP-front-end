import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NotFound from "./not-found";
import Login from "./components/login/login";
import { Layout } from './containers';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
import '../styles/styles.css';

class App extends Component {
    render = () => (
        <Router>
                <Switch>
                    <Route exact path="/Login" name="Login Page" component={Login} />
                    <Route path="/" component={Layout} />
                    <Route component={NotFound} />
                </Switch>
        </Router>
    )
}

export default App;