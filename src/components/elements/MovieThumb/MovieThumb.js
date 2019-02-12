import React from 'react';
import { Link } from 'react-router-dom';
import './MovieThumb.css';


const MovieThumb = (props) => {
  return (
    <div className="rmdb-moviethumb">
      {props.clickable 
        ? 
        <Link to={{ pathname: `/${props.movieId}`, movieName: `${props.movieName}` }}>
        <img src={props.image} alt="MovieTumb"/>
        </Link>
        :
        <img src={props.image} alt="MovieTumb"/>
      }
    </div>
  );
}

export default MovieThumb;