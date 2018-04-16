import React from 'react';
import ReactDOM from 'react-dom';

import injectEnv from './injectEnv';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
if (process.env.NODE_ENV !== 'production') {
  injectEnv();
}

const rootEl = document.getElementById('root');
const render = Component => {
  ReactDOM.render(<BrowserRouter><Component/></BrowserRouter>, rootEl);
};

render(App);

// Hot Module Replacement API
/*
if (process.env.NODE_ENV !== 'production') {
  if ((module as any).hot) {
    (module as any).hot.accept(App, () => {
      render(App);
    });
  }
}
*/
registerServiceWorker();
