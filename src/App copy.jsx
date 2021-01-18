// App.jsx
import React from 'react';
import './App.scss';
// import { Counter } from './features/counter/Counter';
// import logo from './logo.svg';

import { 
  Container 
} from '@material-ui/core';

import { 
  // Header,
  Main, 
} from './components/site';

// import Blog from './views/material/Blog';
// import Contact from './views/material/Contact';

// import Params from './components/router/Params';
// import RestrictionParams from './components/router/RestrictionParams';
// import Location from './components/router/Location';
// import History from './components/router/History';
// import RouteMatch from './components/router/RouteMatch'
// import Enum from './views/material/Enum';
// import { Results, GameOfChance } from './views/material/ConditionalRendering'
// import ConditionParent from './views/material/ConditionParent';
// import { 
//   ActionLink,
//   Parent,
//   User,
// } from './components/events'
// import { 
//   ElementVariable,
//   SwitchStatement,
//   TernaryOperator, 
//   LogicalAndOperator,
// } 
// from './components/conditionals'
// import {
//   ReactSelect,
// } from './components/materials'
// import GridLayout from './components/styles/GridLayout';

// ___ React Hooks, Material-UI and Axios API features
import {
  ScrolledAppBar,
} from './features/AppBars';

// import ExpansionPanelList from './features/Accordions/ExpansionPanelist'

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
        {/* <Header /> */}
        {/* <Hero /> */}
      </header>
      <div>
        <Main />
        <Container maxWidth='md'>
          {/* <GridLayout /> */}
          {/* <ActionLink /> */}
          {/* <ReactSelect /> */}
          {/* <Parent /> */}
          {/* <User /> */}
          {/* <ElementVariable /> */}
          {/* <SwitchStatement /> */}
          {/* <TernaryOperator /> */}
          {/* <LogicalAndOperator /> */}
          {/* <ConditionParent /> */}
          {/* <GameOfChance /> */}
          {/* <Enum /> */}
          {/* <RestrictionParams /> */}
          {/* <Params /> */}
          {/* <Location />  */}
          {/* <History /> */}
          {/* <RouteMatch /> */}
          {/* <Blog /> */}
          {/* <Contact /> */}
          
          <ScrolledAppBar />
          {/* <ExpansionPanelList /> */}
        </Container>
      </div>
    </div>
  );
}

export default App;
