import React from 'react';
import { Link } from 'react-router-dom';
import Proptypes from 'prop-types';
import './MovieThumb.css';


const MovieThumb = ({ image, clickable, movieId, movieName }) => {
  return (
    <div className="rmdb-moviethumb">
      {clickable 
        ? 
        <Link to={{ pathname: `/${movieId}`, movieName: `${movieName}` }}>
        <img src={image} alt="MovieTumb"/>
        </Link>
        :
        <img src={image} alt="MovieTumb"/>
      }
    </div>
  );
}

//روش دیستراکت کردن پراپ های برای فانکشنال کامپوننت ها
//برای کلاس ها تفاوت میکنه
//پشت تموم چیز هایی که پراپ دات بود ور میداریم و فقط اسم رو میگذاریم
//مثل قبل نیازی نیست موقع دیستراکت کردن بگیم از کجا فقط مثل بالا یک اکولاد باز میکنیم و دیستراکت میکنیم

//این چیزی ک الان ازش استفاده کردیم بهش پراپ تایپ میگن چک میکنه که پراپ درست برای کامپوننت فرستاده بشه
//میایم قبل صادرات مینویسیمش

MovieThumb.prototype = {
  image: Proptypes.string,
  movieName: Proptypes.number,
  movieId: Proptypes.number
}

export default MovieThumb;