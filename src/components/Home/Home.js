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
    movie: [],
    HeroImage: null,
    loading: false,
    currentPage: 0,
    totalPages: 0,
    searchTerm: '',
  }

  componentDidMount() {
    this.setState({
      //کد زیر برای نشان داده شدن لودینگ هست
      loading: true
    });
    // حالا یو ار الی را که میخواهیم از ان داده را فچ کنیم مشخص میکنیم
    const endPoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    this.fetchItems(endPoint);
    //نمیدونم چرا فچ ایتمس رو ادیتور نیورد
  }

  //حواست باشه که داریم توی کلاس چیز میز مینویسیم همین جوری کانست ننویسی
  fetchItems = (endPoint) => {
    //فچ مال ای اس شش است و چه پرامیس برمیگردونه پس دن میگیره
    fetch(endPoint)
    .then(result => result.json())
    .then(result => {
      this.setState({
        //در کد زیر ما کپی از فیلم هایی که در استیت هستند میگیریم و نهایتا به فیلم هایی که میایند اضافه میکنیم
        movie: [...this.state.movie, ...result.results]
      });
    });

    // .then(result => result.json())
    //کد بالا => زمانی که نتیجه پرامیس امد داده خام است پس ان را به جیسون تبدیل میکنیم
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
