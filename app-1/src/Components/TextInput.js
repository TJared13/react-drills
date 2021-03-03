import React, {Component} from 'react';
import '../App.css';

export default class TextInput extends Component {
    constructor(){
        super();

        this.state = {
            returnOutput: '',
        }
    };

    trackUserInput(event){
        this.setState({returnOutput: event})
    }

    render() {
        return (
            <div className='textBox'>
             <input className='textInput' onChange={(e) => this.trackUserInput(e.target.value)}/>
             <span className="resultsBox">{this.state.returnOutput}</span>
            </div>
        )
    }
}