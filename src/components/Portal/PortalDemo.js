import React, { Component } from "react";
import ReactDOM from "react-dom";

class PortalDemo extends Component {
  render() {
    return ReactDOM.createPortal(
      <h1>PortalDemo</h1>,
      document.getElementById("portal-root")
    );
  }
}
export default PortalDemo;
