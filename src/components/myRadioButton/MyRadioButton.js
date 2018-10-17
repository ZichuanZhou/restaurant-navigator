import React, { Component } from 'react';
import './MyRadioButton.css';

export default class MyRadioButton extends Component {

  componentWillMount(){
    console.log('My radio button will mount')
  }

  componentDidMount() {
    console.log('My radio button did mount');
  }

  onChange(e) {
    console.log(e.target.value);
    //TODO filter list
  }

  render() {
    return (
      <div className='grid-item'>
        <input onChange={this.onChange} type='radio' value={this.props.val} name={this.props.name}/>
        {this.props.val}
      </div>
    )
  }
}
