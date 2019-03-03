import React from 'react';
import {IMAGE_BASE_URL} from '../../../config';
import './Actor.css';

const Actor = (props) => {
  const POSTER_SIZE = "w154";


  return (
    <div className="rmdb-actor">
      <img 
      src={props.actor.profile_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${props.actor.profile_path}`}
      />

    </div>
  )
}

export default Actor;