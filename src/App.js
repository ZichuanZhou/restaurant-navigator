import React, { Component } from 'react';
import {Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import {RadioGroup, RadioButton, ReversedRadioButton} from 'react-radio-buttons';
import './App.css';
import TopSider from './components/topSider/TopSider';
import LeftSider from './components/leftSider/LeftSider';
import RightSider from './components/rightSider/RightSider';
import Zomato from './api/Zomato';

// var zomato = require('zomato.js');


// var client = zomato.createClient({
//   userKey: '3c5a34db21cc766a8f32bfdb50085d74',
// });

// client.getCategories(null, function(err, result){
//   if(!err){
//     console.log(result);
//   }else {
//     console.log(err);
//   }
// });

class App extends Component {
  

  render() {
    return (
      <div className="App">
        
        <TopSider/>
        <LeftSider/>
        <RightSider/>
      </div>
    );
  }
}

export default App;
