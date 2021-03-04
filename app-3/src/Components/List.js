import React, {Component} from 'react';

export default class List extends Component {
    constructor(){
        super();

        this.state = {
            artists: ['Illenium', 'BTSM', 'Seven Lions', 'Skrux', 'SVDDEN DEATH', 'Slander', 'Blanke', 'Wooli', 'Abandoned', 'Apashe']
        }
    };

    render(){
        let artistsArr = this.state.artists.map((elem, i) => {
        return (<h1 key={i}>{elem}</h1>)
        });
        return(
            <div>{artistsArr}</div>
        )
    }
};