import React, { Component } from 'react';
import {HashRouter, Redirect, Route, Switch} from 'react-router-dom';
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
import '../styles/scss/style.css'

// Containers
import { DefaultLayout } from './containers';

// Pages
import Page404 from './components/Page404';
import Login from './components/login/login'
import { connect } from 'react-redux';


// import { renderRoutes } from 'react-router-config';


const App = (props) => (
      <HashRouter>
        <Switch>

          <Route path={'/login'} name={'Login'} component={Login}/>
          <Route path={'/home'} name={'Inicio'} component={DefaultLayout}/>
          <Route exact render={() =>
            !props.auth.isLoggedIn ? (<Redirect to="/login"/>) : (<Redirect to={'/home'}/>)
          } />
          {/*<Route path={'/'} name={'Inicio'} component={DefaultLayout}/>*/}
          {/*<Route exact name="Error 404" component={Page404} />*/}
        </Switch>
      </HashRouter>
    );

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(App);

