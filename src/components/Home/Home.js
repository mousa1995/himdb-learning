import React from 'react';
import './Home.css';
import '../elements/HeroImage/Heroimage';
import HeroImage from '../elements/HeroImage/Heroimage';
import FourColGrid from  '../elements/FourColGrid/FourColGrid';
import Heroimage from  '../elements/HeroImage/Heroimage';
import LoadMoreBtn from  '../elements/LoadMoreBtn/LoadMoreBtn';
import MovieThumb from  '../elements/MovieThumb/MovieThumb';
import SearchBar from  '../elements/SearchBar/SearchBar';
import Spinner from  '../elements/Spinner/Spinner';
import { API_URL, API_KEY, IMAGE_BASE_URL,  BACKDROP_SIZE, POSTER_SIZE } from '../../config';

class Home extends React.Component {

  state = {

  }

  render(){
    return (
      <div className="rmdb-home">
        <HeroImage/>
        <SearchBar/>
        <FourColGrid/>
        <Spinner />
        <LoadMoreBtn/>
        
      </div>
    );
  }

}

export default Home;
//ساختار نهایی خانه
// کلاس است و استیت دارد
//چیزی را رندر و رندر چیزی را ریترن میکند
// نهایتا اکسپورت دیفالت میشود
