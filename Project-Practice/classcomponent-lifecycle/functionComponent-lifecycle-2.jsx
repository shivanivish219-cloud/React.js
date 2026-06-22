import { Component } from "react";

class LifecycleDemoPart2 extends Component {
  constructor(props) {
    super(props);

    console.log("1. Constructor");

    this.state = {
      count: 0,
    };
  }

  // Mounting Phase
  static getDerivedStateFromProps(props, state) {
    console.log("2. getDerivedStateFromProps", props, state);
    return null;
  }

  componentDidMount() {
    console.log("4. componentDidMount");
  }

  // Updating Phase
  shouldComponentUpdate(nextProps, nextState) {
    console.log("5. shouldComponentUpdate:", nextProps, nextState);
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("7. getSnapshotBeforeUpdate:", prevProps, prevState);
    return "Snapshot Value";
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("8. componentDidUpdate");
    console.log("Snapshot:", snapshot);
  }

  // Unmounting Phase
  componentWillUnmount() {
    console.log("9. componentWillUnmount");
  }

  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    console.log("3 / 6. render");

    return (
      <div style={{ padding: "20px" }}>
        <h2>React Lifecycle Demo</h2>
        <p>Count: {this.state.count}</p>

        <button onClick={this.increment}>Increment Count</button>
      </div>
    );
  }
}

export default LifecycleDemoPart2;