import React, { Component } from 'react';
import MathJax from 'react-mathjax2';
import { ButtonToolbar } from 'react-bootstrap';
import { ToggleButtonGroup } from 'react-bootstrap';
import { ToggleButton } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import './App.css';

function AlcoholVerdict(props) {
    var pureAlcoholFluidOunces = 0.6;
    var alcoholicdrinks = props.beers*props.size*props.abv/(pureAlcoholFluidOunces*100);
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
            <br />
        </div>
    );
}

function CalculateBAC(props) {
    var BW; //Body Water constant, 0.58 for males and 0.49 for females
    var MR; //MR is the metabolism constant (0.015 for males and 0.017 for females)
    if (props.isFemale) {
        BW = 0.49;
        MR = 0.017;
    } else {
        BW = 0.58;
        MR = 0.015;
    }
    var SD; //Standard drinks
    var BAC; //Blood Alcohol Content
    var pureAlcoholFluidOunces = 0.6;
    var pounds2kilograms = 0.453592;
    SD = props.beers*props.size*props.abv/(pureAlcoholFluidOunces*100);
    BAC = (0.806 * SD * 1.2)/(BW * props.weight * pounds2kilograms) - MR * props.time;
    if (BAC < 0.0) {
        BAC = 0.0
    }

    return (
        <div>
            <h1><strong>{BAC.toPrecision(3)}</strong></h1>
        </div>
    );
}

class DrinksResult extends Component {
    constructor(props) {
        super(props);
        this.handleBeerChange = this.handleBeerChange.bind(this);
        this.handleSizeChange = this.handleSizeChange.bind(this);
        this.handleAbvChange = this.handleAbvChange.bind(this);
        this.handleFemaleSexChange = this.handleFemaleSexChange.bind(this);
        this.handleMaleSexChange = this.handleMaleSexChange.bind(this);
        this.handleWeightChange = this.handleWeightChange.bind(this); 
        this.handleTimeChange = this.handleTimeChange.bind(this); 

        this.state = { beers: 1, size: 12, abv: 5.0, isFemale: true, isMale: false, weight: 150, time: 0.25 };
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
    handleFemaleSexChange(e) {
        this.setState({ isFemale: e.target.value });
        this.setState({ isMale: !e.target.value });
    }
    handleMaleSexChange(e) {
        this.setState({ isMale: e.target.value });
        this.setState({ isFemale: !e.target.value });
    }
    handleWeightChange(e) {
        this.setState({ weight: e.target.value });
    }
    handleTimeChange(e) {
        this.setState({ time: e.target.value });
    }

    render() {
        const beers = this.state.beers;
        const size = this.state.size;
        const abv = this.state.abv;
        const isFemale = this.state.isFemale;        
        const isMale = this.state.isMale;
        const weight = this.state.weight;
        const time = this.state.time;

        const BACtex = `\\mathrm{BAC} = \\dfrac{0.806 \\times SD \\times 1.2}{BW \\times Wt} - MR \\times DP`
        return (
            <div className="container">
                <Row className="show-grid">
                    <h1>Blood Alcohol Content (BAC) Estimator</h1>
                    <Col md={6}>
                        <h2>Estimated Blood Alcohol Content (BAC)</h2>
                        <CalculateBAC
                            beers={beers}
                            size={size}
                            abv={abv}
                            isFemale={isFemale}
                            isMale={isMale}
                            weight={weight}
                            time={time} />

                        <label>
                            The legal limit for driving in the US is BAC = 0.08.
                        </label><br />
                    </Col>
                    <Col md={6}> 
                        <p>
                            <label>How many drinks have you had?</label><br />
                            <input type="text"
                                value={beers}
                                onChange={this.handleBeerChange} />
                        </p>
                        <p>
                            <label>Amount of liquid in each drink (ounces)</label><br />
                            <input type="text"
                                value={size}
                                onChange={this.handleSizeChange} />
                        </p>
                        <p>
                            <label>Alcohol by Volume (ABV, %)</label><br />
                            <input type="text"
                                value={abv}
                                onChange={this.handleAbvChange} />
                        </p>
          
                        <div class="text-center">
                            <label>What's your sex</label><br />
                        
                            <ButtonToolbar>
                                <ToggleButtonGroup justified type="radio" name="options" defaultValue={1}>
                                    <ToggleButton 
                                        value={1}
                                        checked={isFemale}
                                        onChange={this.handleFemaleSexChange}>
                                        Female
                                    </ToggleButton>
                                    <ToggleButton 
                                        value={2}
                                        checked={isMale}
                                        onChange={this.handleMaleSexChange}>
                                        Male
                                    </ToggleButton>
                                </ToggleButtonGroup>
                            </ButtonToolbar>
                        </div>
                        <br /> 

                        <p>
                            <label>What's your weight? (pounds)</label><br />
                            <input type="text"
                                value={weight}
                                onChange={this.handleWeightChange} />
                        </p>
                        <p>
                            <label>How long have you been drinking? (hours)</label><br />
                            <input type="text"
                                value={time}
                                onChange={this.handleTimeChange} />
                        </p>
                    </Col>
                </Row>
                <AlcoholVerdict
                    beers={beers}
                    size={size}
                    abv={abv} />
 
                <MathJax.Context input='tex'>
                    <div>
                        <a href="https://en.wikipedia.org/wiki/Blood_alcohol_content">From Wikipedia</a>:
                        <MathJax.Node>{BACtex}</MathJax.Node>
                        where 0.806 is a constant for body water in the blood (mean 80.6%),<br />
                        <MathJax.Node inline>{'SD'}</MathJax.Node> is the number of standard drinks from above,<br />
                        1.2 is a factor to convert the amount in grams, <br />
                        <MathJax.Node inline>BW</MathJax.Node> is a body water constant (0.58 for males and 0.49 for females),<br />
                        <MathJax.Node inline>Wt</MathJax.Node> is body weight (kilogram),<br />
                        <MathJax.Node inline>MR</MathJax.Node> is the metabolism constant (0.015 for males and 0.017 for females)<br />
                        <MathJax.Node inline>DP</MathJax.Node> is the drinking period in hours.<br /> 
                        The factor of 10 from the wikipedia page is not needed: in the US, we consider BAC to be a percentage, not a permillage. 
                    </div>
                </MathJax.Context>
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
