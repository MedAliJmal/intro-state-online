import React, { Component } from "react";
import "./App.css";
import CounterComp from "./components/CounterComp";
import FormComp from "./components/FormComp";

export default class App extends Component {
  state = {
    isVisible: false,
    count: 0,
  };

  inc = () => {
    this.setState({ count: this.state.count + 1 });
  };

  dec = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  handleShow = () => {
    this.setState({ isVisible: !this.state.isVisible });
  };
  render() {
    return (
      <div className="App">
        <button onClick={() => this.handleShow()}>
          {this.state.isVisible ? "Hide" : "Show"}
        </button>
        {this.state.isVisible ? (
          <CounterComp count={this.state.count} inc={this.inc} dec={this.dec} />
        ) : null}
        <FormComp />
      </div>
    );
  }
}
