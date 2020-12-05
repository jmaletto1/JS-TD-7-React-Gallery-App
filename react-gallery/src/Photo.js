import React, {Component} from 'react';
import PhotoRender from './PhotoRender';

export default class Photo extends Component {
  // class Photo extends Component {

  state = {
    resultsData: []
  }
  
  render() {
    this.photoResults = this.props.data;
    // this.props.history();
    // console.log(this.props.pathname);
    // console.log(this.props.loading);
    // let picTick;
  
    // if (this.props.loading) {
    //   return(<h1>Loading! Please wait...</h1>)
    // }
    if (this.photoResults.length > 0) {
    this.picTick = this.photoResults.map(pic => 
      <PhotoRender key={pic.id} owner={pic.owner} title={pic.title} id={pic.id} server={pic.server} secret={pic.secret}/>
    );
  return(
      <div className="photo-container">
      <h2>{this.props.name} Results</h2>
      <ul>
        {this.picTick}
      </ul>
    </div>
  )
} else if (this.photoResults.length === 0) {
  return(
    <div>
      <h1>Unfortunately there are no matches! Please return to the homepage, or try another search!</h1>
    </div>
  )
}
}
}

// const Photo = (props) => {
//     const photoResults = props.data;
//     let picTick;

//     picTick = photoResults.map(pic => 
//       <PhotoRender key={pic.id} owner={pic.owner} title={pic.title} id={pic.id} server={pic.server} secret={pic.secret}/>
//     );

//     return(
//         <div className="photo-container">
//         <h2>{props.name} Results</h2>
//         <ul>
//           {picTick}
//           {/* <li>
//             <img src="https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg" alt="" />
//           </li>
//           <li>
//             <img src="https://farm5.staticflickr.com/4342/36338751244_316b6ee54b.jpg" alt="" />
//           </li>
//           <li>
//             <img src="https://farm5.staticflickr.com/4343/37175099045_0d3a249629.jpg" alt="" />
//           </li>
//           <li>
//             <img src="https://farm5.staticflickr.com/4425/36337012384_ba3365621e.jpg" alt="" />
//           </li> */}
//           {/* <!-- Not Found --> */}
//           {/* <li class="not-found">
//             <h3>No Results Found</h3>
//             <p>You search did not return any results. Please try again.</p>
//           </li> */}
//         </ul>
//       </div>
//     )
// }

// export default withRouter(Photo);