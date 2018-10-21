import React, { Component } from "react";
import "./RightSlider.css";
import yesImg from "../../images/yes.png";
import noImg from "../../images/no.png";

export default class RightSider extends Component {
  render() {
    let detail = this.props.detail.restaurant;
    let content;
    if (detail) {
      content = (
        <div className="right-side">
          <div className="column">
            <img src={detail.thumb} alt="image" />
          </div>
          <div className="column">
            <h4 className="clear restaurant-name">{detail.name}</h4>
            <h4 className="clear restaurant-address">
              {detail.location.address}
            </h4>
            <div className="restaurant-div">
              <div className="icon-div">
                <img className="img-icon" src={yesImg} alt="yes" />
                <span className="icon-text">Delivery available</span>
              </div>
              <div className="icon-div">
                <img className="img-icon" src={noImg} alt="no" />
                <span className="icon-text">No booking</span>
              </div>
            </div>
            <div className="restaurant-div">
              <h4 className="clear restaurant-info">CUISINES</h4>
              <h4 className="clear restaurant-content">{detail.cuisines}</h4>
            </div>
            <div className="restaurant-div">
              <h4 className="clear restaurant-info">RATING</h4>
              <h4 className="clear restaurant-content">
                {detail.user_rating.aggregate_rating}
              </h4>
            </div>
            <div className="restaurant-div">
              <h4 className="clear restaurant-info">PRICE RANGE</h4>
              <h4 className="clear restaurant-content">{detail.price_range}</h4>
            </div>
            <div className="restaurant-div">
              <h4 className="clear restaurant-info">AVERAGE COST FOR 2</h4>
              <h4 className="clear restaurant-content">
                {detail.average_cost_for_two}
              </h4>
            </div>
          </div>
        </div>
      );
    }

    return <div>{content}</div>;
  }
}
