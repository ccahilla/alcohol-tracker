import React, { Component } from 'react';
import './App.css';

function alcoholCalculator() {
    var beers = 3; // glasses
    var size = 16; // oz.
    var abv = 7/100; // in percentage

    var alcoholicdrinks = beers*size*abv/0.6;
    return alcoholicdrinks.toPrecision(3);
}

function DrinksResult(props) {
  return (
    <div>
      <p>{props.numDrinks} Drinks</p>
      <p>{alcoholCalculator()} Drinks</p>
    </div>
  );
}

class App extends Component {
  render() {
    return <div className="App">
      <h1>Alcoholic Drinks Calculator</h1>
      <div className="InputForm">
        <p>Number of Drinks Consumed</p>
        <p>Amount of liquid in each drink (oz.)</p>
        <p>ABV (%)</p>

      </div>
      <div className="DrinksResult">
        <DrinksResult numDrinks="5.6" />
      </div>
    </div>
  }
};

export default App
