import React, { Component } from "react";
import CompF from "./CompF";
import UserContext from "./userContext";
class CompE extends Component {
  constructor(props) {
    super(props);
  }

  static contextType = UserContext;

  render() {
    return (
      <div>
        Comp E context {this.context}
        <CompF />
      </div>
    );
  }
}

// CompE.contextType = UserContext;

export default CompE;
