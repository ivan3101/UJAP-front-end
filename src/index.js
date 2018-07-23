import './polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './js/App';
// disable ServiceWorker
// import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import configureStore from './js/store/configStore';
import {loginUser} from "./js/actions/auth";
import {URL_LOGIN_ESTUDIANTE} from "./js/utilities/constants";

const store = configureStore();

store.dispatch(loginUser(URL_LOGIN_ESTUDIANTE, {username: 'idemeneze14', password: '123456'}));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
// disable ServiceWorker
// registerServiceWorker();
