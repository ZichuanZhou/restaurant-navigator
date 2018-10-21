import "rc-slider/assets/index.css";
import "rc-tooltip/assets/bootstrap.css";
import React, { Component } from "react";
import "./MySlider.css";
import Slider from "rc-slider";

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

export default class MySlider extends Component {
  componentWillMount() {
    //console.log('my slider will mount');
  }

  componentDidMount() {
    //console.log('my slider did mount');
  }

  onAfterChange(e) {
    //console.log(e);
    this.props.filterRestaurant(e);
  }

  render() {
    let minValue = parseInt(this.props.min);
    let maxValue = parseInt(this.props.max);
    return (
      <div className="mySlider">
        <h4>{this.props.name}</h4>
        <Range
          onAfterChange={(e)=>this.props.filterRestaurant(e, maxValue)}
          disabled={this.props.disableSlider}
          min={minValue}
          max={maxValue}
          defaultValue={[0, 5]}
        />
        <span>{this.props.rangeFrom}</span>
        <span className="right">{this.props.rangeTo}</span>
      </div>
    );
  }
}
