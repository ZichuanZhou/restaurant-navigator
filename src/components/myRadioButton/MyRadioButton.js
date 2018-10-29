import React, { Component } from "react";
import PropTypes from "prop-types";
import "./MyRadioButton.css";

export default class MyRadioButton extends Component {
  render() {
    return (
      <div className="grid-item">
        <label className="radio-container">
          {this.props.val}
          <input
            type="radio"
            value={this.props.id}
            name={this.props.name}
            onChange={this.props.getRestaurant}
          />
          <span className="check-mark" />
        </label>
      </div>
    );
  }
}

MyRadioButton.propTypes = {
  getRestaurant: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  val: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}
