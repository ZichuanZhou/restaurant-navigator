import React, { Component } from "react";
import "./TopSider.css";
import MyRadioButton from "../myRadioButton/MyRadioButton";
import MySlider from "../mySlider/MySlider";

export default class TopSider extends Component {
  componentWillMount() {
    //console.log('Top sider will mount')
  }

  componentDidMount() {
    //console.log('Top sider did mount');
  }

  render() {
    return (
      <div className="flex-container">
        <div className="inline-block">
          <h4 className="topside-title">CATEGORY</h4>
          <div className="grid-container1">
            <MyRadioButton
              getRestaurant={this.props.getRestaurant}
              id="10"
              val="Dinner"
              name="category"
            />
            <MyRadioButton
              getRestaurant={this.props.getRestaurant}
              id="5"
              val="Take-Away"
              name="category"
            />
            <MyRadioButton
              getRestaurant={this.props.getRestaurant}
              id="1"
              val="Delivery"
              name="category"
            />
            <MyRadioButton
              getRestaurant={this.props.getRestaurant}
              id="11"
              val="Pubs & Bars"
              name="category"
            />
          </div>
        </div>

        <div className="inline-block">
          <h4 className="topside-title">CUISINE</h4>
          <div className="grid-container3">
            <MyRadioButton
              getRestaurant={this.props.getRestaurant}
              id="1039"
              val="Cafe Food"
              name="cuisine"
            />
            <MyRadioButton
              getRestaurant={this.props.getRestaurant}
              id="3"
              val="Asian"
              name="cuisine"
            />
            <MyRadioButton
              getRestaurant={this.props.getRestaurant}
              id="25"
              val="Chinese"
              name="cuisine"
            />
            <MyRadioButton
              getRestaurant={this.props.getRestaurant}
              id="161"
              val="Coffee and Tea"
              name="cuisine"
            />
            <MyRadioButton
              getRestaurant={this.props.getRestaurant}
              id="5"
              val="Bakery"
              name="cuisine"
            />
            <MyRadioButton
              getRestaurant={this.props.getRestaurant}
              id="983"
              val="Pub Food"
              name="cuisine"
            />
            <MyRadioButton
              getRestaurant={this.props.getRestaurant}
              id="82"
              val="Pizza"
              name="cuisine"
            />
            <MyRadioButton
              getRestaurant={this.props.getRestaurant}
              id="55"
              val="Italian"
              name="cuisine"
            />
            <MyRadioButton
              getRestaurant={this.props.getRestaurant}
              id="110"
              val="Other"
              name="cuisine"
            />
            <MyRadioButton
              getRestaurant={this.props.getRestaurant}
              id="40"
              val="Fast Food"
              name="cuisine"
            />
            <MyRadioButton
              getRestaurant={this.props.getRestaurant}
              id="304"
              val="Sandwich"
              name="cuisine"
            />
          </div>
        </div>

        <div className="inline-block float-right">
          <div className="grid-container1">
            <MySlider
              filterRestaurant={this.props.filterRestaurant}
              disableSlider={this.props.disableSlider}
              name="RATING"
              rangeFrom="0"
              rangeTo="5"
              min="0"
              max="5"
            />
            <MySlider
              filterRestaurant={this.props.filterRestaurant}
              disableSlider={this.props.disableSlider}
              name="COST"
              rangeFrom="$"
              rangeTo="$$$$"
              min="1"
              max="4"
            />
          </div>
        </div>
      </div>
    );
  }
}
