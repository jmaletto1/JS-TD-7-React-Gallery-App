import React from 'react';

const Gallery = ({match}) => {
    let url = match.params.name;
    return(
        <h1>Welcome to {url}</h1>
    )
}

export default Gallery;