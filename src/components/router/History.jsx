import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";


export default function History() {
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
              <Link to="/restrictions/7456/axys12">Restrictions</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/node/:nodeId" component={Node} />
          <Route path="/restrictions/:id/:hash">
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

// old way to fetch history
function Node(props) {
  return (
    <div>
      In React Router v4, you get the history object from props. <br />
      <button type="button" onClick={() => props.history.goBack()}>
        Go back
      </button>
    </div>
  );
}

// new way to fetch history with hooks
function Restrictions() {
  let history = useHistory();

  return (
    <div>
      In React Router v5, You can use hooks to get history object.
      <br />
      <button type="button" onClick={() => history.goBack()}>
        Go back
      </button>
    </div>
  );
}

function Home() {
  return (
    <div className="App">
      <h1>React Router useHistory hook</h1>
      <h2>Inspect the code and click on the menu above</h2>
    </div>
  );
}
