import React, { Component } from 'react';

export default class LeftSider extends Component {
  render() {

    let restaurants = this.props.data.map((item, key)=>{
      return (
        <li key={key}>{item.restaurant.name}</li>
      );
    });

    return(
      <div>
        <ul>
          {restaurants}
        </ul>
      </div>
    );
  }
}
