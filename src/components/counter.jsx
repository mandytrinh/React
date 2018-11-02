import React, { Component } from 'react';

class Counter extends Component {
  //state is an obj that includes data the component needs
  // --its data is LOCAL or PRIVATE to that component
  //props is data that we give to component that's READ-only
  //--purely input and NOT modifiable

  // this sets a local state for a SINGLE counter component/object
  // will NOT work for a GLOBAL reset method
  // state = {
  //   value: this.props.counters.value,
  //   tags: ['tag1', 'tag2', 'tag3']
  // };

/*
  constructor() {
    super(); //call base constructor
    this.handleIncrement = this.handleIncrement.bind(this);
    //returns a new instance of handleIncrement function; where this
    //reference the current counter object
    //otherwise, "this" called in handleIncrement will ref Window
  }
*/
  // 2nd way to bind this to handleIncrement, is to use fat arrow syntax

/*
  handleIncrement = () => {
    //use setState to to tell react we're updating the state &
    //bring the DOM in sync with the virtual DOM

    //get the current count, increment it & reset it
    this.setState({value: this.state.value + 1})
  }
*/

 //to pass args into handlers, can do this wrapper method
 //returns the desired method, OR use an anonymous inline function
 // like onClick={ () => this.handleIncrement(product)}

  doHandleIncrement = () => {
    this.props.onIncrement(this.props.counters);
  }

  doHandleDelete = () => {
    this.props.onDelete(this.props.counters.id);
  }


  render() {
    // props is plain javascript obj that includes values of <Counter/>
    // console.log("props is ", this.props);

    return (
      <div>
        {this.props.children}
        <span className = {this.getBadgeClasses()}>{this.formatCount()}</span>

        <button onClick = {this.doHandleIncrement} className="btn btn-secondary btn-sm">Increment</button>

        <button onClick = {this.doHandleDelete} className="btn btn-danger btn-sm m-2">Delete</button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += (this.props.counters.value === 0) ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const {value} = this.props.counters;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
