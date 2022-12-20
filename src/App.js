import './App.css';
import Counter from './Components/Counter/Counter'
// import Total from './Components/Total/index';


import React, { Component } from 'react';
export default class App extends Component {

   state = {
        sum :0,
    }

  render() {
    return (
      <div className='app'>
            <div className='insideDiv'>
              <Counter number="10" />
              <Counter number="10" />
              <Counter number="10" />
              <Counter number="100" />
              {/* <Total  sum={this.state.sum}/> */}
            </div>
        
      </div>
    )
  }
}
