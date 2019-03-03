import React from  'react';
import { Link } from 'react-router-dom';

const Navigation = (props) => {
  return (
    <div className="rmdb-navigation">
      <div className="rmdb-navigation-content">
        <link to="/">
        <p>home</p>
        </link>
        <p>/</p>

        <p>{props.movie}</p>
        {/* توی بالا یی عنوان فیلم رو میگیریم */}
      </div>
    </div>
  )
}

export default Navigation;