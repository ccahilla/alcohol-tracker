import React, { Component } from 'react';
import './App.css';

function AlcoholVerdict(props) {
        var alcoholicdrinks = props.beers*props.size*props.abv/0.6;
        var funtag;
        if (alcoholicdrinks < 1.0) {
            funtag = "Just getting started..."
        } else if (alcoholicdrinks < 2.0) {
            funtag = "Very responsible of you"
        } else if (alcoholicdrinks < 3.0) {
            funtag = "The best beer of the night"
        } else if (alcoholicdrinks < 4.0) {
            funtag = "The turning point"
        } else if (alcoholicdrinks < 5.0) {
            funtag = "It's official, you're tipsy"
        } else if (alcoholicdrinks < 6.0) {
            funtag = "Switch to PBR, for the love of god"
        } else if (alcoholicdrinks < 7.0) {
            funtag = "Time to consider running for office"
        } else {
            funtag = "Biggest wanker at the bar"
        }
        return (
            <div>
                <h3><strong>You've had {alcoholicdrinks.toPrecision(2)} drinks.</strong></h3>
                <p>{funtag}</p>
            </div>
        );
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
            <div align="center">
                <h1>Alcoholic Drinks Calculator</h1>
                <p>
                    <label>Number of Drinks Consumed</label><br />
                    <input type="text"
                        value={beers}
                        onChange={this.handleBeerChange} />
                </p>
                <p>
                    <label>Amount of liquid in each drink (oz.)</label><br />
                    <input type="text"
                        value={size}
                        onChange={this.handleSizeChange} />
                </p>
                <p>
                    <label>ABV (%)</label><br />
                    <input type="text"
                        value={abv}
                        onChange={this.handleAbvChange} />
                </p>
                <AlcoholVerdict
                    beers={beers}
                    size={size}
                    abv={abv} />
            </div>
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
