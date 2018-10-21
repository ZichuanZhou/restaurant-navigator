import React, { Component } from "react";
import "./MyRadioButton.css";

export default class MyRadioButton extends Component {
  componentWillMount() {
    //console.log('My radio button will mount')
  }

  componentDidMount() {
    //console.log('My radio button did mount');
  }

  onChange(e) {
    //console.log(e.target.value, e.target.name);
    this.props.getRestaurant(e);
  }

  render() {
    return (
      <div className="grid-item">
        <input 
          type="radio"
          value={this.props.id}
          name={this.props.name}
          onChange={this.props.getRestaurant}
        />
        <label className="radio-text">{this.props.val}</label>
        
      </div>
    );
  }
}
