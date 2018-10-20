import React, { Component } from "react";
import "./App.css";
import TopSider from "./components/topSider/TopSider";
import LeftSider from "./components/leftSider/LeftSider";
import RightSider from "./components/rightSider/RightSider";
import { searchRestaurant, filterRestaurant } from "./api/Zomato";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      category: "",
      cuisine: "",
      restaurantDetail: [],
      restaurantData: [],
      restaurantFilterData: []
    };
  }

  componentWillMount() {
    console.log("will mount");
  }

  componentDidMount() {
    console.log("did mount");
  }

  componentWillUpdate() {
    console.log(
      "category " + this.state.category,
      "cuisine " + this.state.cuisine
    );
  }

  setMyState = e => {
    if (e.target.name === "category") {
      this.setState({
        category: e.target.value
      });
    } else if (e.target.name === "cuisine") {
      this.setState({
        cuisine: e.target.value
      });
    }
  };

  getRestaurantData = async e => {
    // e.preventDefault();
    this.setState({
      restaurantDetail: [] //refresh the right side content
    });

    await this.setMyState(e); //setState is an async method

    searchRestaurant(this.state.category, this.state.cuisine).then(res => {
      this.setState({
        restaurantData: res,
        restaurantFilterData: res
      });
    });
  };

  filterRestaurantData = (e, max) => {
    console.log("min " + e[0]);
    console.log("max " + e[1]);
    console.log(max);

    let data = this.state.restaurantData;
    console.log(data);

    if (max === 4) {
      //filter by cost
      data = data.filter(item => {
        return (
          item.restaurant.price_range >= e[0] &&
          item.restaurant.price_range <= e[1]
        );
      });
      this.setState({
        restaurantFilterData: data
      });
    } else if (max == 5) {
      //filter by rating
      data = data.filter(item => {
        return (
          item.restaurant.user_rating.aggregate_rating >= e[0] &&
          item.restaurant.user_rating.aggregate_rating <= e[1]
        );
      });
      this.setState({
        restaurantFilterData: data
      });
    }
  };

  handleClick = data => {
    console.log(data);
    this.setState({
      restaurantDetail: data
    });
  };

  render() {
    let disableSlider = this.state.restaurantData.length > 0 ? false : true; //disable slider if there is no restaurant data
    return (
      <div className="App">
        <div className="top-bar">
          <TopSider
            getRestaurant={this.getRestaurantData}
            filterRestaurant={this.filterRestaurantData}
            //disableSlider = {disableSlider}
          />
        </div>
        <div className="left-bar">
          <LeftSider
            clickHandler={this.handleClick}
            data={this.state.restaurantFilterData}
          />
        </div>
        <div className="right-bar">
          <RightSider detail={this.state.restaurantDetail} />
        </div>
      </div>
    );
  }
}
