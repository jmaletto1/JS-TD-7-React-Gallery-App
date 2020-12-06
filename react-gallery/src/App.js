// Import the necessary Components and Dependencies for this Project

import React, {Component} from 'react';
import axios from 'axios';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import apiKey from './config';
import Search from './components/Search';
import Nav from './components/Nav';
import NotFound from './components/NotFound';
import Gallery from './components/Gallery';
import './App.css';

// Set the APIKey to match config.js
const flickrKey = apiKey;

export default class App extends Component {

  /* 
  This is the main results function for search queries. It accepts a user input (or if one if not provided, then one is provided by default)
  The function uses the axios.get method to fetch the photo results from flickr, and store them on the state (to be used in Gallery.js). The query
  itself and the default value for loading are also set. Finally, a catch method is put in place to account for any potential errors.
  */

  displayResults = (query = 'twenty one pilots') => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${flickrKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(res => {
      this.setState({
        resultsData: res.data.photos.photo,
        query: query,
        loading: true
      })
    }
    )
    .catch(error => {
      console.log('Error receiving the data!', error);
    });
  }

  /*
  In the render method, we first create the container div, and set up the BrowserRouter container. The Search component is rendered, and passed the
  function that displays results. Then, the <switch> statements are placed, so that the NotFound component can be rendered if the url doesn't match
  the index route, or a Search route. The index route is redirected to show pictures of Dogs for ease of use. The search route is rendered with
  props passed to it, meaning that it can access the pathname within its class. The Switch and BrowserRouter statements are then closed.
  */
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