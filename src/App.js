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
      restaurantFilterData: [],
      ratingMin: 0,
      ratingMax: 5,
      costMin: 1,
      costMax: 4
    };
  }

  componentWillMount() {
    //console.log("will mount");
  }

  componentDidMount() {
    //console.log("did mount");
  }

  componentWillUpdate() {
    // console.log(
    //   "category " + this.state.category,
    //   "cuisine " + this.state.cuisine
    // );
  }

  setMyState = (name, value) => {
    this.setState({
      [name]: value //bracket notation
    });
  }

  getRestaurantData = async e => { //need to use await, function must be async
    // e.preventDefault();
    this.setState({
      restaurantDetail: [] //refresh the right side content
    });

    if (e.target.name === "category") {
      await this.setMyState("category", e.target.value);
    } else if (e.target.name === "cuisine") {
      await this.setMyState("cuisine", e.target.value);
    }

    searchRestaurant(this.state.category, this.state.cuisine).then(res => {
      this.setState({
        restaurantData: res,
        restaurantFilterData: res
      });
    });
  };

  filterRestaurantData = async (e, max) => { //need to use await, function must be async
    this.setState({
      restaurantDetail: [] //refresh the right side content
    });
    // console.log("min " + e[0]);
    // console.log("max " + e[1]);
    // console.log(max);
    let data = this.state.restaurantData;
    //console.log(data);

    //TODO below condition check is tricky for this case, need to find out a better way
    if (max === 4) {            //filter by cost
      await this.setMyState("costMin",e[0]); 
      await this.setMyState("costMax",e[1]);
    } else if (max == 5) {      //filter by rating
      await this.setMyState("ratingMin",e[0]);
      await this.setMyState("ratingMax",e[1]);
    }

    data = data.filter(item => {
      return (
        item.restaurant.user_rating.aggregate_rating >= this.state.ratingMin &&
        item.restaurant.user_rating.aggregate_rating <= this.state.ratingMax &&
        item.restaurant.price_range >= this.state.costMin &&
        item.restaurant.price_range <= this.state.costMax
      );
    });
    
    this.setState({
      restaurantFilterData: data
    });
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
            disableSlider = {disableSlider}
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
