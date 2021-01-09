import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";


export default function Location() {
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
              <Link to="/restrictions/7456/HZM">Restrictions</Link>
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

// Old way to fetch location
function Node(props) {
  return (
    <div>
      In React Router v4, you get the <i>location</i> object from props. <br />
      Current pathname: <strong>{props.location.pathname}</strong>
    </div>
  );
}

// new way to fetch location with hooks
function Restrictions() {
  let location = useLocation();

  return (
    <div>
      In React Router v5, You can use hooks to get location object.
      <br />
      Current pathname: <strong>{location.pathname}</strong>
    </div>
  );
}

function Home() {
  return (
    <div className="App">
      <h1>React Router useLocation hook</h1>
      <h2>Click on the links to see it in action</h2>
    </div>
  );
}
