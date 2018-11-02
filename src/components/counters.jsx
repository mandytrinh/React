import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  state = {
    counters: [
      {id: 1, value: 0},
      {id: 2, value: 0},
      {id: 3, value: 0},
      {id: 4, value: 0},
    ]
  }

  handleDelete = () => {
    console.log("Event Handler Called!");
  }

  render() {
    return (
      <div>
        {this.state.counters.map(function(counterObj)
          {
            return (
            <Counter
              key={counterObj.id}
              value={counterObj.value}
              id={counterObj.id}>
            </Counter>)
          })
        };
      </div>);
  }
}

export default Counters;
