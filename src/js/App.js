import React, {Component} from 'react';
import {Redirect, Router, Route, Switch} from 'react-router-dom';
import '../styles/App.css';
// Styles
// CoreUI Icons Set
import '@coreui/icons/css/coreui-icons.min.css';
// Import Flag Icons Set
import 'flag-icon-css/css/flag-icon.min.css';
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
// Import Main styles for this application

// Containers
import { DefaultLayout } from './containers';

// Pages
import Login from './components/login/login'
import { connect } from 'react-redux';
import {history} from "./utilities/history";

// import { renderRoutes } from 'react-router-config';


class App extends Component {
  render() {
    return (<div>
        <link rel="stylesheet" type="text/css" href={this.props.theme}/>
        <Router history={history}>
          <Switch>
            <Route path={'/login'} exact name={'Login'} component={Login}/>
            <Route path={'/home'} name={'Inicio'} component={DefaultLayout}/>
            <Route exact render={() =>
              !this.props.auth.isLoggedIn ? (<Redirect to="/login"/>) : (<Redirect to={'/home'}/>)
            }/>
          </Switch>
        </Router>
      </div>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    theme: state.theme.theme
  };
};

export default connect(mapStateToProps)(App);

