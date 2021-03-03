import React, {Component} from 'react';
import './App.css';

export default class App extends Component {
  constructor(){
    super();

    this.state = {
      favArtists: ['Illenium', 'BTSM', 'Excision', 'SevenLions', 'Nurko']
    }
  }

  render(){
    let favoriteArtist = this.state.favArtists.map((elem, i) => {
      return(
        <h1 key={i}>{elem}</h1>
      )
    })
    return <div>{favoriteArtist}</div>
  };
}
  