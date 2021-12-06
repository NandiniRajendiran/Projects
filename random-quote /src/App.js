import React, { Component } from "react";
import "typeface-roboto";
import QuoteMachine from "./Component/QuoteMachine.js";
import "./styles.css";
import { random } from "lodash";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      selectedQuoteIndex: null
    };
    this.generateNewQuoteIndex = this.generateNewQuoteIndex.bind(this);
    this.assignNewQuoteIndex = this.assignNewQuoteIndex.bind(this);
  }
  componentDidMount() {
    fetch(
      "https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json"
    )
      .then((data) => data.json())
      .then((quotes) => this.setState({ quotes }, this.assignNewQuoteIndex));
  }
  generateNewQuoteIndex() {
    if (!this.state.quotes.length) {
      return undefined;
    }
    return random(0, this.state.quotes.length - 1);
  }
  get selectedQuote() {
    if (
      !this.state.quotes.length ||
      !Number.isInteger(this.state.selectedQuoteIndex)
    ) {
      return undefined;
    }
    return this.state.quotes[this.state.selectedQuoteIndex];
  }
  assignNewQuoteIndex() {
    this.setState({ selectedQuoteIndex: this.generateNewQuoteIndex() });
  }
  render() {
    return (
      <div className="App">
        {this.selectedQuote ? (
          <QuoteMachine
            selectedQuote={this.selectedQuote}
            assignNewQuoteIndex={this.assignNewQuoteIndex}
          />
        ) : null}
      </div>
    );
  }
}

export default App;
