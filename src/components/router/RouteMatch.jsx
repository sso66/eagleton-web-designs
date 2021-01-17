import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { useRouteMatch } from "react-router";

export default function RouteMatch() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/node/NodeDetails">Node</Link>
            </li>
            <li>
              <Link to="/restrictions/7456/xhas895">Restrictions</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/node">
            <Node />
          </Route>
          <Route path="/restrictions">
            <Restrictions />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Node() {
  return (
    <Route
      path="/node/:id"
      render={({ match }) => {
        return (
          <div>
            Your current match path: <strong>{match.path}</strong>
          </div>
        );
      }}
    />
  );
}

// useRouteMatch to make your route above cleaner
function Restrictions() {
  let match = useRouteMatch("/node/:id/:stock");

  return (
    <div>
      In React Router v5, You can use <code>useRouteMatch</code> to get match
      object.
      <br />
      Current match path: <strong>{match.path}</strong>
    </div>
  );
}

function Home() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
