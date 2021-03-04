import React, {Component} from "react";
import NewTask from './Components/NewTask';
import List from "./Components/List";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      taskList: [],
    };

    this.addTask = this.addTask.bind(this);
  }

  addTask(task) {
    this.setState({taskList: [...this.state.taskList, task]});
  }

  render() {
    return (
      <div className="main">
        <h1>My to-do list:</h1>
        <NewTask add={this.addTask} />
        <List tasks={this.state.taskList} />
      </div>
    );
  }
}
