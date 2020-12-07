// Import the necessary Components and Dependencies for this Project

import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Search from './components/Search';
import Nav from './components/Nav';
import NotFound from './components/NotFound';
import Gallery from './components/Gallery';
import './App.css';

export default class App extends Component {

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
          {/* <Search doSearch={this.displayResults}/> */}
          <Search />
          <Nav />
          <Switch>
            <Route exact path='/'> <Redirect to="/search/Dogs" /></Route>
            <Route exact path='/search/'> <Redirect to="/search/Dogs" /></Route>
            <Route path="/search/:name" render={(props) => <Gallery {...props} />}/> 
            <Route component={NotFound}/>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }

}