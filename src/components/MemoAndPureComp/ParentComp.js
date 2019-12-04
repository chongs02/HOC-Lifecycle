import React, { Component } from "react";
import RegComp from "./RegComp";
import PureComp from "./PureComp";
import MemoComp from "./MemoComp";

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "chong"
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "chong"
      });
    }, 2000);
  }

  render() {
    console.log("Parent Comp");
    return (
      <div>
        ParentComp
        <RegComp name={this.state.name}></RegComp>
        <PureComp name={this.state.name}></PureComp>
        <MemoComp name={this.state.name}></MemoComp>
      </div>
    );
  }
}

export default ParentComp;
