import React, {Component} from 'react';

export default class ListFilter extends Component {
    constructor(){
        super();

        this.state = {
            userInput: '',
        }
    };

    inputFilter(){

    };


    render(){
        return(
            <input className='inputText' />
        )
    }
}