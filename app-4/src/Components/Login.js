import React, {Component} from 'react';

export default class Login extends Component {
    constructor(){
        super();
        this.state = {
            userName: '',
            userPassword: '',
        }
        
        this.loginTrack = this.loginTrack.bind(this);
    };

    userNameInput(usr){
        this.setState({userName: usr});
    };

    userPassInput(pass){
        this.setState({userName: pass});
    };

    loginTrack(){
        alert(`Username: ${this.state.userName} Password: ${this.state.userPassword}`)
    }

    render(){
        return(
            <section className='space'>
                <input type='text' placeholder='Username' onChange={(e => this.userNameInput(e.target.value))}/>
                <input type ='text' placeholder='Password' onChange={(e => this.userPassInput(e.target.value))} />
                <div>
                <button onClick={this.loginTrack}>Login</button>
                </div>
            </section>
        )
    }
};