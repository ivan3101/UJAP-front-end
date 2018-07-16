import './polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './js/App';
// disable ServiceWorker
// import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import configureStore from './js/store/configStore';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
// disable ServiceWorker
// registerServiceWorker();
