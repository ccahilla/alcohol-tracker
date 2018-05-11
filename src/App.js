import React, { Component } from 'react';
import './App.css';

function alcoholCalculator() {
    var beers = 2; // glasses
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



class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

class EssayForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Please write an essay about your favorite DOM element.'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Essay:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

class FlavorForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite La Croix flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
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
      <div className="NameForm">
        <NameForm />
      </div>
      <div className="EssayForm">
        <EssayForm />
      </div>
      <div className="FlavorForm">
        <FlavorForm />
      </div>
    </div>
  }
};

export default App
