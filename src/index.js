import React from 'react';
import ReactDom from 'react-dom';
import App from './js/app';
import './styles/global.scss';
import registerServiceWorker from './registerServiceWorker';

ReactDom.render(<App />, document.getElementById('root'));
registerServiceWorker();
