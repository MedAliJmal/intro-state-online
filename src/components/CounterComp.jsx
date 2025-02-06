import React, { Component } from "react";

export default class CounterComp extends Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.inc()}>+</button>
        <p>{this.props.count}</p>
        <button onClick={() => this.props.dec()}>-</button>
      </div>
    );
  }
}
