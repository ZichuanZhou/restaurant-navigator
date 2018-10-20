import React, { Component } from "react";
import "./LeftSide.css";

export default class LeftSider extends Component {
  handleClick = item => {
    this.props.clickHandler(item);
  };

  render() {
    let restaurants = this.props.data.map((item, key) => {
      return (
        <li onClick={() => this.handleClick(item)} key={key}>
          {item.restaurant.name}
        </li>
      );
    });

    return (
      <div>
        <ul>{restaurants}</ul>
      </div>
    );
  }
}
