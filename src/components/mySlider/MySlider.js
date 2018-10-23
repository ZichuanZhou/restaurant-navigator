import "rc-slider/assets/index.css";
import React, { Component } from "react";
import PropTypes from "prop-types";
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
      <div className="my-slider">
        <h4 className="slider-text slider-title">{this.props.name}</h4>
        <Range
          onAfterChange={e => this.props.filterRestaurant(e, maxValue)}
          disabled={this.props.disableSlider}
          min={minValue}
          max={maxValue}
          defaultValue={[0, 5]}
          trackStyle={[
            {
              backgroundColor: "#4fbdbf",
              height: 20
            }
          ]}
          handleStyle={{
            backgroundColor: "#f1f1f1",
            width: 29,
            height: 29
          }}
        />
        <p>
          <span className="slider-text">{this.props.rangeFrom}</span>
          <span className="slider-text float-right">{this.props.rangeTo}</span>
        </p>
      </div>
    );
  }
}

MySlider.propTypes = {
  filterRestaurant: PropTypes.func.isRequired,
  disableSlider: PropTypes.bool,
  name: PropTypes.string,
  rangeFrom: PropTypes.string,
  rangeTo: PropTypes.string,
  min: PropTypes.string,
  max: PropTypes.string,
}