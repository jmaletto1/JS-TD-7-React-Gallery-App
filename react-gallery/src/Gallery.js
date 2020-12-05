import React from 'react';
// import PhotoRender from './PhotoRender';

const Gallery = ({match}, props) => {
    let url = match.params.name;
    console.log(props.data)
    // console.log(props.data)
    // let photoResults = props.data
    // let picTick = photoResults.map(pic => 
    //     <PhotoRender key={pic.id} owner={pic.owner} title={pic.title} id={pic.id} server={pic.server} secret={pic.secret}/>
    //   );
    return(
        <div>
            <h1>Welcome to {url}</h1>
            {/* <p>{picTick}</p> */}
        </div>
    )
}

export default Gallery;