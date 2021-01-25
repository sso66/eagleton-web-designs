// index.jsx: main entry 
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import store from './app/store';

import * as serviceWorker from './serviceWorker';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <br/>
      {/* <a href="https://sebhastian.com/tags/react/">
            More React tutorials at sebhastian.com
        </a>   
      */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// ___ Hot Module Reloading (HMR) enabled ___
if (module.hot) {
  module.hot.accept()
}

// eof