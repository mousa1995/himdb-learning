import React from 'react';
import { Link } from 'react-router-dom';
import Proptypes from 'prop-types';
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

//این چیزی ک الان ازش استفاده کردیم بهش پراپ تایپ میگن چک میکنه که پراپ درست برای کامپوننت فرستاده بشه
//میایم قبل صادرات مینویسیمش

MovieThumb.prototype = {
  image: Proptypes.string,
  movieName: Proptypes.number,
  movieId: Proptypes.number
}

export default MovieThumb;