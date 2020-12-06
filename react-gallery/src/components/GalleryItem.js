import React from 'react';
/*
The GalleryItem component receives the server, id, secret, and title parameters from Gallery.js, 
which are used to formulate the li and the flickr URL.
*/
const GalleryItem = (props) => (
    <li>
        <img src={`https://live.staticflickr.com/${props.server}/${props.id}_${props.secret}.jpg`} alt={props.title} />
    </li>
);

export default GalleryItem;
