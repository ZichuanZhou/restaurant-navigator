import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import React, { Component } from 'react';
import './MySlider.css';
import Slider from 'rc-slider';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

export default class MySlider extends Component {

  componentWillMount() {
    //console.log('my slider will mount');
  }

  componentDidMount() {
    //console.log('my slider did mount');
  }

  onChange(e) {
    console.log(e);
    //TODO filter list
  }


  render() {
    return (
      <div className='mySlider'>
        <h4>{this.props.name}</h4>
        <Range
          onChange = {this.onChange}
          min={0}
          max={5}
          defaultValue={[0, 5]}
          // tipFormatter={value => `${value}%`}
        />
        <span>{this.props.rangeFrom}</span>
        <span className='right'>{this.props.rangeTo}</span>
        
      </div>
    );
  }
}
