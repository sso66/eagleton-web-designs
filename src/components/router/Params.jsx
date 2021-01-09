// UseParams.jsx
import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,  
  Link,
  useParams
} from "react-router-dom";


export default function Params() {
  let node = "/node/NodeDetails"
  let restrictions = "/restrictions/7456/xys12"

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to={node}>Node</Link>
            </li>
            <li>
              <Link to={restrictions}>Restrictions</Link>
            </li>
              </ul>
        </nav>
        <Switch>
          <Route path="/node/:nodeId" component={Node} />
          <Route path="/restrictions/:id/:stock">
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

// old way to fetch parameters
function Node({ match }) {
  let params = match.params;
  return (
    <div>
      In React Router v4, you get parameters from the props. Current parameter
      is <strong>{params.nodeId}</strong>
    </div>
  );
}

// new way to fetch parameters with hooks
function Restrictions() {
  let params = useParams();
  
  return (
    <div>
      In React Router v5, You can use hooks to get parameters.
      <br />
      Current <i>id</i> parameter is <strong>{params.id}</strong>
      <br />
      Current <i>stock</i> parameter is <strong>{params.stock}</strong>
    </div>
  );
}

function Home() {
  return (
    <div className="App">
      <h1>React Router useParams hook</h1>
      <h2>Click on the links to see it in action</h2>
    </div>
  );
}

// eof