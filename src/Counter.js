import React from "react";
import { Component } from "react";

class Counter extends Component {
    state = { Count: 0 };

    constructor(props) {
        super(props);
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
  };
    increment() {
    this.setState( ({
      Count: this.state.Count + 1
    }));
  }

  decrement() {
    if (this.state.Count > 0) {
      this.setState( ({
        Count: this.state.Count - 1
      }));
    }
    else {
      alert("Count cannot be less than 0");
    }
  }

  render() {
    return (
      <>
        <div className="counter">
        <p> {this.state.Count}</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
      </>
    );
  }
}
export default Counter;

