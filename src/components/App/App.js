import React, { Component } from "react";
import logo from "../../logo.svg";
import "./App.css";

class App extends Component {
  componentDidMount() {
    const { getWeatherByLocation /*getWeatherByCity*/ } = this.props;
    getWeatherByLocation(52.2319, 21.0067);
    // getWeatherByCity("Warszawa", "pl");
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
