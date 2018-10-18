import React, { Component } from 'react';
import './TopSider.css';
import MyRadioButton from '../myRadioButton/MyRadioButton';
import MySlider from '../mySlider/MySlider';

export default class TopSider extends Component {
  componentWillMount(){
    //console.log('Top sider will mount')
  }

  componentDidMount() {
    //console.log('Top sider did mount');
  }

  render() {
    return (
      <div className=''>
        
        <div className='inlineBlock'>
          <h4>CATEGORY</h4>
          <div className='grid-container1'>
            <MyRadioButton getRestaurant={this.props.getRestaurant} val='Dining' name='category'/>
            <MyRadioButton getRestaurant={this.props.getRestaurant} val='Take-Away' name='category'/>
            <MyRadioButton getRestaurant={this.props.getRestaurant} val='Delivery' name='category'/>
            <MyRadioButton getRestaurant={this.props.getRestaurant} val='Pubs & Bars' name='category'/>
          </div>
        </div>
       
        <div className='inlineBlock'>
          <h4>CUISINE</h4>
          <div className='grid-container3'>
            <MyRadioButton getRestaurant={this.props.getRestaurant} val='Cafe Food' name='cuisine'/>
            <MyRadioButton getRestaurant={this.props.getRestaurant} val='Asian' name='cuisine'/>
            <MyRadioButton getRestaurant={this.props.getRestaurant} val='Chinese' name='cuisine'/>
            <MyRadioButton getRestaurant={this.props.getRestaurant} val='Coffee and Tea' name='cuisine'/>
            <MyRadioButton getRestaurant={this.props.getRestaurant} val='Bakery' name='cuisine'/>
            <MyRadioButton getRestaurant={this.props.getRestaurant} val='Pub Food' name='cuisine'/>
            <MyRadioButton getRestaurant={this.props.getRestaurant} val='Pizza' name='cuisine'/>
            <MyRadioButton getRestaurant={this.props.getRestaurant} val='Italian' name='cuisine'/>
            <MyRadioButton getRestaurant={this.props.getRestaurant} val='Other' name='cuisine'/>
            <MyRadioButton getRestaurant={this.props.getRestaurant} val='Fast Food' name='cuisine'/>
            <MyRadioButton getRestaurant={this.props.getRestaurant} val='Sandwich' name='cuisine'/>
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
