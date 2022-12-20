import React, { Component } from 'react'
import './style.css';

export default class Counter extends Component {

    state = {
        counter:0,    
    }

    increment = (num)=>{
         this.setState((prevState)=> ({
            counter : prevState.counter + +num,
         }))
    }

    decrement = (num)=>{
      if (this.state.counter > 0) {
        if (this.state.in > this.state.counter) {
          this.setState(() => ({
            counter: 0,
          }));
        } else {
          this.setState((prevState) => ({
            counter: prevState.counter - +num,
          }));
        }
      }
    }

    data = [this.props.id,this.state];

  render() {
    return (
      <div className='Counter'  id={this.props.data} onChange={this.state.counter}>
          <div>
          <p >{this.state.counter}</p>
          </div> 
          <div className='buttons'>
              <button className='decrement' onClick={() =>this.decrement(this.props.number)}>-</button>
              <button className='increment' onClick={() =>this.increment(this.props.number)}>+</button>
          </div>
      </div>
      
    )
  }
}
