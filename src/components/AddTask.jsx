import React, { Component } from "react";

export default class AddTask extends Component {
  state = {
    inputValue: "",
  };
  render() {
    return (
      <div>
        <h1>our todo list</h1>
        <form action="">
          <input type="text" />
          <button type="submit">Add Task</button>
        </form>
      </div>
    );
  }
}
