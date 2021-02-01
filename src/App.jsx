// App.jsx
import React from 'react';
import './App.scss';
// import { Counter } from './features/Redux/Counter';
// import logo from './logo.svg';

import { 
  Container,
} from '@material-ui/core';

import { 
  Header,
  Main, 
} from './components/site';

// ___ React Hooks, Material-UI and Axios API features
import {
  // FixedPosition,
  // ScrolledAppBar,
} from './features/AppBars';

import {
  // ExpansionPanelList, 
  // ExpansionPanelListLazyLoad,
} from './features/Accordions'

import {
  Users,
  Article,
  JsonPlaceholderAxiosUsers,
  // JsonPlaceholderAxiosUsers,
} from './features/Axios';

import {
  ReqResUsers,
  JsonPlaceholderFetchUsers,
  MuiFetchReqResUsers,
} from './features/Fetch';


// ___ Eagleton Web Designs Website ___
// import {

// } from './views/Home'

import Features from './views/Features'

// import About from './views/About'
// import Contact from './views/Contact'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <Counter />  */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>  */}
        {/* <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span> */}
      </header>
      <div>
        <Main />
        <Container maxWidth='md'>
          {/* <ExpansionPanelList /> */}
          <hr />
          {/* <ExpansionPanelListLazyLoad /> */}
          <Article />
          {/* <Users /> */}
          {/* <ReqResUsers /> */}
          {/* <JsonPlaceholderAxiosUsers /> */}
          {/* <JsonPlaceholderFetchUsers /> */}
          <hr />
          {/* <MuiFetchReqResUsers /> */}
          <Features />
        </Container>
      </div>
    </div>
  );
}

export default App;

// eof