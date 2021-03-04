import React, {Component} from 'react';
import ToDo from './Components/ToDo'
import './App.css';

export default class App extends Component{
  constructor(){
    super();
    this.state = {
      listItems: [],
      userInput: '',
    }
    this.addTask = this.addTask.bind(this)
  };

  inputTrack(val){
    this.setState({userInput: val})
  };

  addTask(){
    this.setState({
      listItems: [...this.state.listItems, this.state.userInput], 
      userInput: '',
    });
  };

  render(){
    let taskList = this.state.listItems.map((elem, i) => {
      return <ToDo key={i} task={elem} />
    }) 

    return (
      <section className='elemAlign'>
        <h1>My ToDo List:</h1>
        <div>
          <input 
          value={this.state.userInput} 
          placeholder='Input Task' 
          onChange={e => this.inputTrack(e.target.value)} />
          <button onClick={this.addTask}>Add Task</button>
        </div>
      
        <div>
          {taskList}
        </div>

      </section>
    )
  }
}

