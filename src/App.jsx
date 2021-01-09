// App.jsx
import { Container } from '@material-ui/core';
import React from 'react';

// import { Counter } from './features/counter/Counter';
// import logo from './logo.svg';
import './App.scss';

import { 
  Header,
  Main, 
} from './components/site';

import Hero from './views/Hero';
import Blog from './views/Blog';
import Contact from './views/Contact';
import Params from './components/router/Params';
import Location from './components/router/Location';
import History from './components/router/History';
import RouteMatch from './components/router/RouteMatch'
import Enum from './views/Enum';
import { Results, GameOfChance } from './views/ConditionalRendering'
import ConditionParent from './views/ConditionParent';
import { 
  ActionLink,
  Parent,
} from './components/events'
import { 
  ElementVariable,
  SwitchStatement,
  TernaryOperator, 
  LogicalAndOperator,
} 
from './components/conditionals'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <Counter />  */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
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
        <Header />
        <Hero />
      </header>
      <div>
        <Main />
        <Container maxWidth='md'>
          {/* <Parent /> */}
          {/* <ActionLink /> */}
          {/* <ElementVariable /> */}
          {/* <SwitchStatement /> */}
          {/* <TernaryOperator /> */}
          {/* <LogicalAndOperator /> */}
          {/* <ConditionParent /> */}
          {/* <GameOfChance /> */}
          {/* <Enum /> */}
          {/* <Params /> */}
          {/* <Location />  */}
          {/* <History /> */}
          {/* <RouteMatch /> */}
          {/* <Blog /> */}
          {/* <Contact /> */}
        </Container>
      </div>
    </div>
  );
}

export default App;
