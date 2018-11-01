import React, { Component } from 'react';

class Counter extends Component {
  //state is an obj that includes data the component needs
  state = {
    count: 0,
    // imageUrl: "https://picsum.photos/200" //generates random image
  };

  // styles = {
  //   fontSize: 10,
  //   fontWeight: "bold"
  // };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += (this.state.count === 0) ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
