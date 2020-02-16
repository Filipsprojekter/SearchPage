import React from "react";
import "./Button.css";

class Button extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="btn">
          <button type="button" className="btn1">
            {this.props.buttonText}
          </button>
          <button type="button" className="btn2">
            {this.props.buttonText2}
          </button>
          <button type="button" className="btn3">
            {this.props.buttonText3}
          </button>
        </div>
      </div>
    );
  }
}

export default Button;
