// File: index.jsx
// Note: main entry 
// Date: 2/1/2011
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import store from './features/Redux/store/configureStore';

import * as serviceWorker from './serviceWorker';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
        <br/>
        {/* <a href="https://sebhastian.com/tags/react/">
              More React tutorials at sebhastian.com
          </a>   
        */}
      </Router>
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