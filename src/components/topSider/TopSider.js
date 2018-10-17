import React, { Component } from "react";
import "./TopSider.css";
import MyRadioButton from "../myRadioButton/MyRadioButton";
import MySlider from '../mySlider/MySlider';

export default class TopSider extends Component {
  componentWillMount(){
    console.log('Top sider will mount')
  }

  componentDidMount() {
    console.log('Top sider did mount');
  }

  render() {
    return (
      <div className=''>
        <div className='inlineBlock'>
          <h4>CATEGORY</h4>
          <div className='grid-container1'>
            <MyRadioButton val='Dining' name='category'/>
            <MyRadioButton val='Take-Away' name='category'/>
            <MyRadioButton val='Delivery' name='category'/>
            <MyRadioButton val='Pubs & Bars' name='category'/>
          </div>
        </div>
       
        <div className='inlineBlock'>
          <h4>CUISINE</h4>
          <div className='grid-container3'>
            <MyRadioButton val='Cafe Food' name='cuisine'/>
            <MyRadioButton val='Asian' name='cuisine'/>
            <MyRadioButton val='Chinese' name='cuisine'/>
            <MyRadioButton val='Coffee and Tea' name='cuisine'/>
            <MyRadioButton val='Bakery' name='cuisine'/>
            <MyRadioButton val='Pub Food' name='cuisine'/>
            <MyRadioButton val='Pizza' name='cuisine'/>
            <MyRadioButton val='Italian' name='cuisine'/>
            <MyRadioButton val='Other' name='cuisine'/>
            <MyRadioButton val='Fast Food' name='cuisine'/>
            <MyRadioButton val='Sandwich' name='cuisine'/>
          </div>
        </div>

        <div className='inlineBlock right'>
          <div className='grid-container1'>            
            <MySlider name='RATING' rangeFrom='0' rangeTo='5'/>
            <MySlider name='COST' rangeFrom='$' rangeTo='$$$$'/>
          </div>
        </div>

      </div>
    );
  }
}
