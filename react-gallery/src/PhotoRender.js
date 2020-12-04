import React from 'react';

const PhotoRender = (props) => (
    <li>
        {/* <p>${props.owner}</p> */}
        <a href={`https://www.flickr.com/${props.owner}/${props.id}`}>View</a>
        {/* <img src={`https://www.flickr.com/${props.owner}/${props.id}`} alt={props.title}/> */}
        {/* https://www.flickr.com/photos/95803994@N05/50678061826 */}
    </li>
);

export default PhotoRender;
