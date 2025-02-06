import React, { Component } from "react";
import "./App.css";
import TaskList from "./components/TaskList";

export default class App extends Component {
  state = {
    tasks: [
      {
        id: Math.random(),
        action: "Learn HTML",
        isDone: true,
      },
      {
        id: Math.random(),
        action: "Learn CSS",
        isDone: true,
      },
      {
        id: Math.random(),
        action: "Learn PROPS",
        isDone: true,
      },
      {
        id: Math.random(),
        action: "Learn STATE",
        isDone: false,
      },
    ],
  };
  render() {
    return (
      <div className="App">
        {/* AddTask.jsx */}
        <TaskList tasks={this.state.tasks} />
      </div>
    );
  }
}
