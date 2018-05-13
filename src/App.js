import React, { Component } from 'react';
import './App.css';

function AlcoholVerdict(props) {
    var alcoholicdrinks = props.beers*props.size*props.abv/0.6;
    return <p>{alcoholicdrinks.toPrecision(2)} Drinks.</p>;
}

class DrinksResult extends Component {
  constructor(props) {
    super(props);
    this.handleBeerChange = this.handleBeerChange.bind(this);
    this.handleSizeChange = this.handleSizeChange.bind(this);
    this.handleAbvChange = this.handleAbvChange.bind(this);

    this.state = { beers: 3, size: 12, abv: 5.0/100 };
   }

  handleBeerChange(e) {
    this.setState({ beers: e.target.value });
  }
  handleSizeChange(e) {
    this.setState({ size: e.target.value });
  }
  handleAbvChange(e) {
    this.setState({ abv: e.target.value });
  }

  render() {
    const beers = this.state.beers;
    const size = this.state.size;
    const abv = this.state.abv;
    return (
      <fieldset>
        <label>Number of Drinks Consumed</label>
        <legend>Alcoholic Drinks Calculator</legend>
        <input
          value={beers}
          onChange={this.handleBeerChange} />
        <br />
        <label>Amount of liquid in each drink (oz.)</label>
        <input
          value={size}
          onChange={this.handleSizeChange} />
        <br />
        <label>ABV (%)</label>
        <input
          value={abv}
          onChange={this.handleAbvChange} />
        <br />
        <AlcoholVerdict
          beers={beers}
          size={size}
          abv={abv} />
      </fieldset>
    );
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
    </div>
  }
};

export default App
