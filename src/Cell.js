import React, { Component } from "react";

class CellCM extends Component {
  render() {
    return (
      <div
        onClick={(e) => {
          if (this.props.isInitial) {
            return;
          }
          this.props.onChange((this.props.number + 1) % 5);
        }}
        className={`cell ${this.props.isInitial ? "initial" : ""}`}
      >
        {this.props.number !== 0 && this.props.number}
      </div>
    );
  }
}

const Cell = ({ isInitial, number, onChange }) => (
  <div
    onClick={(e) => {
      if (isInitial) {
        return;
      }
      onChange((number + 1) % 5);
    }}
    className={`cell ${isInitial ? "initial" : ""}`}
  >
    {number !== 0 && number}
  </div>
);

export default Cell;
