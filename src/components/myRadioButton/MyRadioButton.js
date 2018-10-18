import React, { Component } from 'react';
import './MyRadioButton.css';

export default class MyRadioButton extends Component {

  componentWillMount(){
    //console.log('My radio button will mount')
  }

  componentDidMount() {
    //console.log('My radio button did mount');
  }

  onChange(e) {
    console.log(e.target.value, e.target.name);
    this.props.getRestaurant(e);
    
    //TODO filter list
  }

  render() {
    return (
      <div className='grid-item'>
        <input type='radio' value={this.props.val} name={this.props.name}  onChange={this.onChange.bind(this)} />
        {this.props.val}
      </div>
    )
  }
}
