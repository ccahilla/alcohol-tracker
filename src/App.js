import React, { Component } from 'react';
import './App.css';

function alcoholCalculator() {
    var beers = 1; // glasses
    var size = 12; // oz.
    var abv = 5.9/100; // in percentage

    var alcoholicdrinks = beers*size*abv/0.6;
    return alcoholicdrinks.toPrecision(3);
}

class DrinksResult extends Component {
  constructor(props) {
    super(props);
    this.state = {numDrinks: "5.6"}
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div>
        <p>{this.state.numDrinks} Drinks</p>
        <p>{alcoholCalculator()} Drinks</p>
      </div>
    );
  }
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
        <DrinksResult />
      </div>
    </div>
  }
};

export default App
