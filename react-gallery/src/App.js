import React, {Component} from 'react';
import axios from 'axios';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import apiKey from './config';
import Photo from './Photo';
import Search from './Search';
import Nav from './Nav';
import NotFound from './NotFound';
// import Gallery from './Gallery';
import './App.css';

const flickrKey = apiKey;


export default class App extends Component {
  constructor() {
  super();
  
    this.state = {
      resultsData: [],
      catData: [],
      dogData: [],
      gorillaData: [],
      searchData: [],
      query: 'twenty one pilots',
      loading: true
    };
}

  componentDidMount() {
    this.displayResults();
    this.displayResults('cats');
    this.displayResults('dogs');
    this.displayResults('gorillas');
    // this.setState({loading: true})
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.query !== prevState.query) {
      this.setState({loading: false});
      console.log('The query has reverted!');
    }
  }

  displayResults = (query = 'twenty one pilots') => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${flickrKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(res => {
      if (query === 'cats') {
        this.setState({
          catData: res.data.photos.photo
        })
      } else if (query === 'dogs') {
        this.setState({
          dogData: res.data.photos.photo
        })
      } else if (query === 'gorillas') {
        this.setState({
          gorillaData: res.data.photos.photo
        })
      // } else if (query !== 'twenty one pilots') {
      //   this.setState({
      //     resultsData: res.data.photos.photo,
      //     query: query
      //   })
      } else { 
      this.setState({
        resultsData: res.data.photos.photo,
        query: query,
        loading: true
        // searchQuery: query
      })

    }})
    .catch(error => {
      console.log('Error receiving the data!', error);
    });
  }
    
  render() {
    return (
      <div className='container'>
        <BrowserRouter>
          <Search doSearch={this.displayResults}/>
          <Nav />
          <Switch>
            {/* <Route exact path='/' render= {() => <Photo name='twenty one pilots' data={this.state.resultsData}/>}/>  */}
            <Route exact path='/' render= {() => <Photo name={this.state.query} data={this.state.resultsData} loading={this.state.loading}/>}/>
            <Route path='/Cats' render= {() => <Photo name='Cats' data={this.state.catData} loading={this.state.loading}/>}/>
            <Route path='/Dogs' render= {() => <Photo name='Dogs' data={this.state.dogData} loading={this.state.loading}/>}/>
            <Route path='/Gorillas' render= {() => <Photo name='Gorillas' data={this.state.gorillaData} loading={this.state.loading}/>}/> */}
            {
              (this.state.loading)
              ? <h1>Loading</h1>
              : <Route path={'/search/:name'} render= {() => <Photo data={this.state.resultsData} name={this.state.query}/> } />
            }
            <Route component={NotFound}/>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }

}