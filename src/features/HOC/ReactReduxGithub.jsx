// features/HOC/index.js
import React from "react";
// import ReactDOM from "react-dom";

import RepositoriesHOC from "./Respositories";
import { default as Repositories } from "./RepositoriesHooks";

function ReactReduxGitHub() {
  return (
    <div className="App">
      <h2>My Github Repos with HOC</h2>
      <RepositoriesHOC />
      <h2>My Github Repos with Hooks</h2>
      <Repositories />
    </div>
  );
}

export default ReactReduxGitHub;
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
