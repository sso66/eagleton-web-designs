import React from "react";
import ReactDOM from "react-dom";

// import Repositories from "./Repositories";
import { default as Repositories } from "./RepositoriesHooks";

function App() {
  return (
    <div className="App">
      <h1>My Github repos</h1>
      <Repositories />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
