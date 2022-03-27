import React from "react";
import "./styles.css";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <>
          Clicked: <span id="value">0</span> times
          <button id="increment">+</button>
          <button id="increment">-</button>
          <button id="increment">+ 10</button>
        </>
      </div>
    );
  } // fim render
} // fim da classe
