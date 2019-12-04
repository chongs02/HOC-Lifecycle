import React, { Component } from "react";
import LifecycleB from "./LifecycleB";

class LifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "chong"
    };
    console.log("LifecycleA constructor");
  }
  static getDerivedStateFromProps(props, state) {
    // console.log(props);
    // console.log(state);
    console.log("LifecycleA getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifecycleA componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    // console.log(nextProps);
    // console.log(nextState);
    console.log("LifecycleA shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // console.log(prevProps);
    // console.log(prevState);
    console.log("LifecycleA getSnapshotBeforeUpdates");
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // console.log(prevProps);
    // console.log(prevState);
    // console.log(snapshot);
    console.log("LifecycleA componentDidUpdate");
  }

  changeState = () => {
    this.setState({
      name: "Codevolution"
    });
  };

  render() {
    console.log("LifecycleA render");
    return (
      <div>
        <div>Lifecycle A</div>
        <button onClick={this.changeState}>Change state</button>
        <LifecycleB></LifecycleB>
      </div>
    );
  }
}

export default LifecycleA;
