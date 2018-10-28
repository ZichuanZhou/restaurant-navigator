import React, { Component } from "react";
import PropTypes from "prop-types";
import "./LeftSider.css";

export default class LeftSider extends Component {
  handleClick = item => {
    this.props.clickHandler(item);
  };

  render() {
    let restaurants = this.props.data.map((item, key) => {
      return (
        <li
          className="left-side-li"
          onClick={() => this.handleClick(item)}
          key={key}
        >
          {item.restaurant.name}
        </li>
      );
    });

    return (
      <div className="left-side">
        {/* <h4 className="left-side-text">RESULTS</h4> */}
        <ul className="left-side-ul">
          <li className="left-side-text">RESULTS</li>
          {restaurants}
        </ul>
      </div>
    );
  }
}

LeftSider.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired
}

