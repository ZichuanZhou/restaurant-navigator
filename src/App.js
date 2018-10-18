import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import TopSider from './components/topSider/TopSider';
import LeftSider from './components/leftSider/LeftSider';
import RightSider from './components/rightSider/RightSider';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      category: '',
      cuisine: '',
      restaurantInfo: []
    };
    //this.getRestaurantInfo = this.getRestaurantInfo.bind(this);
  }

  componentWillMount() {
    console.log('will mount');
  }

  componentDidMount() {
    console.log('did mount');

  }

  componentWillUpdate() {
    console.log(this.state.category,this.state.cuisine);
  }


  getRestaurantInfo = async(e) => {
   // e.preventDefault();    
    let header = {
      method: 'GET',
      headers: {
        'user-key': '3c5a34db21cc766a8f32bfdb50085d74',
        'Accept': 'application/json'
      }
    };
    let reqURL = 'https://developers.zomato.com/api/v2.1/search?entity_id=297&entity_type=city';

    if(e.target.name === 'category') {
      console.log('above category')
      this.setState({
        category: e.target.value
      },()=>{
        console.log(this.state.category)
      });
      
    } else if (e.target.name === 'cuisine') {
      console.log('above cuisine')
      this.setState({
        cuisine: e.target.value
      },()=>{
        console.log(this.state.cuisine)
      });
      
    }



    
    if(this.state.category !== '' && this.state.cuisine !== '') {
      reqURL = 'https://developers.zomato.com/api/v2.1/search?entity_id=297&entity_type=city&cuisines='
                      +this.state.cuisine+'&category='+this.state.category;
    } else if(this.state.category !== '') {
      reqURL = 'https://developers.zomato.com/api/v2.1/search?entity_id=297&entity_type=city&&category='
                      +this.state.category;
    } else if(this.state.cuisine !== '') {
      reqURL = 'https://developers.zomato.com/api/v2.1/search?entity_id=297&entity_type=city&&cuisines='
                      +this.state.cuisine;
    }

    console.log(reqURL);
    const rawData = await fetch(reqURL, header);
    //console.log('raw data',rawData);
    const rawDataJSON = await rawData.json();
    //console.log('raw data json',rawDataJSON)
    const restaurantData = await rawDataJSON.restaurants;
    //console.log('restaurant data',restaurantData);
    this.setState({
      restaurantInfo: restaurantData
    });
  };



  render() {
    return (
      <div className='App'>
        <TopSider getRestaurant={this.getRestaurantInfo} />
        <LeftSider data={this.state.restaurantInfo} />
        <RightSider />
      </div>
    );
  }
}
