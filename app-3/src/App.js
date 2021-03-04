import React, {Component} from 'react';
import './App.css';

export default class App extends Component {
    constructor(){
      super();
      this.state = {
        filterStr: '',
        artists: ['Illenium', 'BTSM', 'Seven Lions', 'Skrux', 'SVDDEN DEATH', 'Slander', 'Blanke', 'Wooli', 'Abandoned', 'Apashe']
      }
    };

    filterArtist(val){
      this.setState({filterStr: val})
    };

    render(){
      let filteredArtists = this.state.artists.filter(elem => elem.includes(this.state.filterStr)).map((elem, i) => {
        return <h1 key={i}>{elem}</h1>
      });

      return(
        <section>
          <input className='inputText' placeholder='Filter Artist List' onChange={e => this.filterArtist(e.target.value) }/>
          <div>{filteredArtists}</div>
        </section>
      )
  }
}

