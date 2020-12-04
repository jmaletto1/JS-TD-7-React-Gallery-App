import React, {Component} from 'react';
import axios from 'axios';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import apiKey from './config';
import Photo from './Photo';
import Search from './Search';
import Nav from './Nav';
import NotFound from './NotFound';
import './App.css';

const flickrKey = apiKey;

export default class App extends Component {
  constructor() {
  super();
  
    this.state = {
      resultsData: []
    };
}

  componentDidMount() {
    this.displayResults();
    // console.log(this.state.resultsData);
  }


  displayResults = (query = 'twenty one pilots') => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${flickrKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(res => {
      // console.log(res.data.photos.photo)
      this.setState({
        resultsData: res.data.photos
      })
    })
    .catch(error => {
      console.log('Error receiving the data!', error);
    });
  }
    
  render() {
    return (
      <div className='container'>
        <BrowserRouter>
          <Search />
          <Nav />
          <Switch>
            <Route exact path='/' render= {() => <Photo name='twenty one pilots' data={this.state.resultsData.photo}/>}/>
            {/* <Route path=':query' render= {() => <Photo data={this.state.resultsData.photo} />}/> */}
            <Route path='/Cats' render= {() => <Photo name='Cats' data={this.state.resultsData.photo}/>}/>
            <Route path='/Dogs' render= {() => <Photo name='Dogs'/>}/>
            <Route path='/Gorillas' render= {() => <Photo name='Gorillas' />}/> */}
            <Route component={NotFound}/>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }

}