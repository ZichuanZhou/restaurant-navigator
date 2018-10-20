import React, { Component } from "react";

export default class RightSider extends Component {
  render() {
    let content;
    let detail = this.props.detail.restaurant;
    if (detail) {
      content = (
        <div>
          <h1>{detail.name}</h1>
          <h2>{detail.location.address}</h2>
          <h3>Price Range: {detail.price_range}</h3>
          <h4>Rating: {detail.user_rating.aggregate_rating}</h4>
          <img src={detail.thumb} alt="image" />
        </div>
      );
    } else {
      content = <p>Right sider</p>;
    }

    return <div>{content}</div>;
  }
}
