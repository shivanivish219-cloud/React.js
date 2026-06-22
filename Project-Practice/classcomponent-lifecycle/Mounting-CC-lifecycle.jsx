import { Component } from "react";

class LifecycleCC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
    };

    console.log("1.Inside constructor");
  }

  componentDidMount() {
    console.log("3.Mounting successful");
  }

  render() {
    console.log("2.Inside Render Lifecycle");
    return (
      <div>
        <h1>Counter: {this.state.counter}</h1>
        <button
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          Increment
        </button>
        <button
          onClick={() => this.setState({ counter: this.state.counter - 1 })}
        >
          Decrement
        </button>
      </div>
    );
  }
}

export default LifecycleCC;
