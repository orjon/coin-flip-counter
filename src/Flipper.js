import React, { Component } from 'react';
import Coin from './Coin';
import './Flipper.css';

class Flipper extends Component{
  constructor(props){
    super(props);
    this.state={
      side:'both',
      flips:0,
      headsCount:0
    };
    this.flipCoin = this.flipCoin.bind(this)
  }

  flipCoin(){
    let currentFlips = this.state.flips +1;
    let currentHeadsCount = this.state.headsCount;
    let sideNew='tails';
    if (Boolean(Math.floor(Math.random()*2))) {
      currentHeadsCount++;
      sideNew='heads'
    } 

    console.log('side: '+sideNew)
    this.setState({
      flips:currentFlips,
      side:sideNew,
      headsCount:currentHeadsCount
    })
  }

  render(){
    return(
      <div className='Flipper'>
        <Coin side={this.state.side}/>
        <h3>Flips: {this.state.flips} [ {this.state.headsCount} Heads + {this.state.flips-this.state.headsCount} Tails ]</h3>
        <button onClick={this.flipCoin}>Flip Coin!</button>
      </div>
    );
  }
}

export default Flipper