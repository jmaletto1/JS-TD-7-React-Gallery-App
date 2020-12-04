import React from 'react';

const PhotoRender = (props) => (
    <li>
        {/* <p>${props.owner}</p> */}
        {/* <a href={`https://www.flickr.com/${props.owner}/${props.id}`}>View</a> */}
        {/* <img src={`https://www.flickr.com/${props.owner}/${props.id}`} alt={props.title}/> */}
        <img src={`https://live.staticflickr.com/${props.server}/${props.id}_${props.secret}.jpg`} alt={props.title} />
    </li>
);

export default PhotoRender;
