import React, {Component} from "react";

export default class NewTask extends Component {
  constructor() {
    super();

    this.state = {
      userInput: ""
    };

    this.add = this.add.bind(this);
  }

  userInput(val) {
    this.setState({userInput: val});
  }

  add() {
    this.props.add(this.state.userInput);
    this.setState({ userInput: "" });
  }

  render() {
    return (
      <div>
        <input
          value={this.state.userInput}
          placeholder="Enter task"
          onChange={e => this.userInput(e.target.value)}
        />

        <button onClick={this.add}>Add</button>
      </div>
    );
  }
}

