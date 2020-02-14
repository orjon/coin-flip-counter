import React, { Component } from 'react';
import Coin from './Coin';

class Flipper extends Component{

  render(){
    return(
      <div className='Flipper'>
        <Coin />
      </div>
    );
  }
}

export default Flipper