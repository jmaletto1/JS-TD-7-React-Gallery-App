import React, {Component} from 'react';
import GalleryItem from './GalleryItem';
import axios from 'axios';
import apiKey from '../config';

const flickrKey = apiKey;

/*
 The Gallery component is initially similar to the App component. It stores the url, resultsData and loading value on the state, and defines
 the displayResults function that will return the photo results. componentDidMount() is used to set the url on the state to match the current path,
 and then call displayResults() with said url as a parameter. This means that whatever is typed after /search/, will be searched for!

 */

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

  /*
  componentDidUpdate is used to reset the state in time for fresh searches. When the previous url is not the same as the current path, loading
  is reset to true, and the displayResults function is called on the new path.
  */
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
  
/*
Within the render method, we check to see if the loading state is true. If so, a <h1> will display a loading message. Once the data has been fetched
successfully, the loading state will be set to false by this.displayResults, and the program can proceed.

Next, we check if the resultsData contains more than 0 results. If so, we map over the array, rendering a GalleryItem for each result.
If there are no results, a customised message is displayed.
*/

  render() {

    if (this.state.loading) {
        return(<h1>Loading...</h1>)
    }
    if (this.state.resultsData.length > 0) {
    this.picTick = this.state.resultsData.map(pic => 
      <GalleryItem key={pic.id} owner={pic.owner} title={pic.title} id={pic.id} server={pic.server} secret={pic.secret}/>
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
