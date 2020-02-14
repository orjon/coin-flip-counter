import React, { Component } from 'react';
import './Coin.css';

class Coin extends Component {

  render(){
    return(
      <div className='Coin'>
        {(this.props.side === 'both') && <img src={require('./coin-both.png')} alt=''/>}
        {(this.props.side === 'heads') && <img src={require('./coin-heads.png')} alt=''/>}
        {(this.props.side === 'tails') && <img src={require('./coin-tails.png')} alt=''/>}     
      </div>
    );
  }
}

export default Coin
