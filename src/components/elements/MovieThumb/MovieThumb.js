import React from 'react';
import './MovieThumb.css';

const MovieThumb = (props) => {
  return (
    <div>
      <img src={props.image} alt="MovieTumb"/>
    </div>
  );
}

export default MovieThumb;