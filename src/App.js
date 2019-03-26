import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

// import Quote from "./Quote";
import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Travel.React</h1>
        </header>
        <Travel />
      </div>
    );
  }
}

export default App;