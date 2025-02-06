import React, { Component } from "react";

export default class FormComp extends Component {
  state = {
    textTable: ["Hello", "Bouthayna Zakkour", "Yessine Choura"],
    inputValue: "",
  };

  handleChange = (text) => {
    this.setState({ inputValue: text });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      textTable: [...this.state.textTable, this.state.inputValue],
    });
  };

  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.inputValue}
            onChange={(e) => this.handleChange(e.target.value)}
          />
          <button type="submit">Add Text</button>
        </form>
        {this.state.textTable.map((el, i) => (
          <h1 key={i}>{el}</h1>
        ))}
      </div>
    );
  }
}
