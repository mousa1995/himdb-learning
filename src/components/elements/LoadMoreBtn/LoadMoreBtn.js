import React from 'react';
import './LoadMoreBtn.css';

const LoadMoreBtn = (props) => {
  return (
    <div className="rmdb-loadmorebtn"
      onClick = {props.onClick}
      //این فانکشن همانی است که در هوم نوشته شده است
    >
    <p>{props.text}</p>
    </div>
  );
}

export default LoadMoreBtn;