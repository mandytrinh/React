import React, { Component } from 'react';
import NavBar from './components/navbar'
import CounterList from './components/counterList';

import './App.css';

class App extends Component {
  state = {
    //counters list is the # of Counter things/components to be displayed
    counters: [
      {id: 1, value: 0},
      {id: 2, value: 0},
      {id: 3, value: 0},
      {id: 4, value: 0},
    ]
  }

  handleIncrement = (counterObj) => {
    // make a new array by cloning old array with spread syntax
    const newCountersArr = [...this.state.counters];
    const idx = newCountersArr.indexOf(counterObj);
    // also clone the individual counter objects
    newCountersArr[idx] = {...counterObj};
    newCountersArr[idx].value++;
    this.setState({counters: newCountersArr})
  }
  handleDelete = (counterId) => {
    // create NEW counters array for all items that's NOT the
    // target deleted item
    //& then setState to overwrite old counter arr

    const newCountersArr = this.state.counters.filter((counterObj) => counterObj.id !== counterId);
    this.setState({counters: newCountersArr});
  }

  handleReset = () => {
    const newCountersArr = this.state.counters.map((counterObj) => {
      counterObj.value = 0;
      return counterObj;
    });
    this.setState({counters: newCountersArr});
  }

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters = {this.state.counters.reduce((totalSoFar, counterObj) =>
          {
            return totalSoFar + counterObj.value;
          }, 0)}
        />
        <main className = "container">
          <CounterList
          counters = {this.state.counters}
          onReset = {this.handleReset}
          onIncrement = {this.handleIncrement}
          onDelete = {this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
