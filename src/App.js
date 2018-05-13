import React, { Component } from 'react';
import './App.css';

function AlcoholVerdict(props) {
    var alcoholicdrinks = props.beers*props.size*props.abv/0.6;
    return <p>alcoholicdrinks.toPrecision(3)</p>;
}

class DrinksResult extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { beers: 3, size: 12, abv: 5.0/100 };
   }

  handleChange(e) {
    this.setState({ beers: e.target.value, size: e.target.value, abv: e.target.value, });
  }

  render() {
    const beers = this.state.beers;
    const size = this.state.size;
    const abv = this.state.abv;
    return (
      <fieldset>
        <legend>Alcoholic Drinks Calculator</legend>
        <input
          value={beers}
          onChange={this.handleChange} />
        <label>Number of Drinks Consumed</label>
        <input
          value={size}
          onChange={this.handleChange} />
        <label>Amount of liquid in each drink (oz.)</label>
        <input
          value={abv}
          onChange={this.handleChange} />
        <label>ABV (%)</label>
        <AlcoholVerdict
          beers={beers}
          size={size}
          abv={abv} />
      </fieldset>
    );
  }
}


function BoilingVerdict(props) {
  if (props.celcius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {temperature: ''};
  }

  handleChange(e) {
    this.setState({temperature: e.target.value});
  }

  render() {
    const temperature = this.state.temperature;
    return (
      <fieldset>
        <legend>Enter temperature in Celcius:</legend>
        <input
          value={temperature}
          onChange={this.handleChange} />

        <BoilingVerdict
          celcius={parseFloat(temperature)} />
      </fieldset>
    )
  }
}

class App extends Component {
  render() {
    return <div className="App">
      <div className="InputForm">
      </div>

      <div className="DrinksResult">
        <DrinksResult />
      </div>
      <div className="Calculator">
        <Calculator />
      </div>
    </div>
  }
};

export default App
