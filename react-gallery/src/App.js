import React, {Component} from 'react';
import axios from 'axios';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import apiKey from './config';
// import Photo from './Photo';
import Search from './Search';
import Nav from './Nav';
import NotFound from './NotFound';
import Gallery from './Gallery';
import './App.css';

const flickrKey = apiKey;


export default class App extends Component {
  // constructor() {
  // super();
// }

  displayResults = (query = 'twenty one pilots') => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${flickrKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(res => {
      this.setState({
        resultsData: res.data.photos.photo,
        query: query,
        loading: true
      })
    
    }
  // }
    )
    .catch(error => {
      console.log('Error receiving the data!', error);
    });
  // }
  }

  render() {
    return (
      <div className='container'>
        <BrowserRouter>
          <Search doSearch={this.displayResults}/>
          <Nav />
          <Switch>
            <Route exact path='/'> <Redirect to="/search/Dogs" /></Route>
               <Route path="/search/:name" render={(props) => <Gallery {...props} />}/> 
            <Route component={NotFound}/>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }

}