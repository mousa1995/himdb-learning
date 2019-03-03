import React from  'react';
import { Link } from 'react-router-dom';

const Navigation = (props) => {
  return (
    <div className="rmdb-navigation">
      <div className="rmdb-navigation-content">
        <Link to="/">
        <p>home</p>
        </Link>
        <p>/</p>
        {console.log(props.movie)}
        <p>{props.movie}</p>
        {/* توی بالا یی عنوان فیلم رو میگیریم */}
      </div>
    </div>
  )
}

export default Navigation;