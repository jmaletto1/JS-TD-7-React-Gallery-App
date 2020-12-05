import React, {Component} from 'react';
import PhotoRender from './PhotoRender';
import axios from 'axios';
import apiKey from './config';

const flickrKey = apiKey;

export default class Photo extends Component {
      constructor() {
          super();

  this.state = {
    url: '',
    resultsData: [],
    loading: true
  }
      }

  componentDidMount() {
    this.setState({url: this.props.match.params.name});
    this.displayResults(this.props.match.params.name);
  }

  componentDidUpdate(prevProps, prevState) {
      if (prevState.url !== this.props.match.params.name) {
        this.setState({url: this.props.match.params.name, loading: true});
        this.displayResults(this.props.match.params.name);
      }
    }


  displayResults = (query = 'twenty one pilots') => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${flickrKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(res => {
        this.setState({
            resultsData: res.data.photos.photo,
            loading: false
          })
        }
        )
        .catch(error => {
          console.log('Error receiving the data!', error);
        });
      }
  
  render() {

    if (this.state.loading) {
        return(<h1>Loading...</h1>)
    }
    if (this.state.resultsData.length > 0) {
    this.picTick = this.state.resultsData.map(pic => 
      <PhotoRender key={pic.id} owner={pic.owner} title={pic.title} id={pic.id} server={pic.server} secret={pic.secret}/>
    );
  return(
      <div className="photo-container">
      <h1>{this.state.url} Photo Results</h1>
      <ul>
        {this.picTick}
      </ul>
    </div>
  )
} else if (this.state.resultsData.length === 0) {
  return(
    <div>
      <h1>No results for {this.state.url} pictures unfortunately</h1>
    </div>
  )
}
}
}
