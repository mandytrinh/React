import React, { Component } from 'react';
import Counter from './counter';

class CounterList extends Component {

  render() {

    // TIP: use object destructuring to define properties of
    // an object so don't have to retype this.[value]

    const {counters, onDelete, onIncrement, onReset } = this.props;

    return (
      <div>
        <button onClick = {onReset} className = "btn btn-primary btn-sm m-2">Reset</button>

        {counters.map((counterObj) =>
        (
          <Counter
          key = {counterObj.id}
          onDelete = {onDelete}
          onIncrement = {onIncrement}
          counters = {counterObj}
          />
        ))}
      </div>
    );
  }
}

export default CounterList;
