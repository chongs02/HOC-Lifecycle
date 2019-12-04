import React, { Component } from "react";
import { UserConsumer } from "./userContext";

class CompF extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <UserConsumer>
        {username => {
          return <div>Hello {username}</div>;
        }}
      </UserConsumer>
    );
  }
}
export default CompF;
