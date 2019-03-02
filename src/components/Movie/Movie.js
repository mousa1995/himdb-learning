import React , { Component } from 'react';
import { API_URL, API_KEY } from '../../config';
import Navigation from '../elements/Navigation/Navigation';
import MovieInfo from '../elements/MovieInfo/MovieInfo';
import MovieInfoBar from '../elements/MovieInfoBar/MovieInfoBar';
import FourColGrid from '../elements/FourColGrid/FourColGrid';
import Actor from '../elements/Actor/Actor';
import Spinner from '../elements/Spinner/Spinner';
import './Movie.css';

class Movie extends Component {

  // 1. نوشتن استیت ها
  state = {
    movie: null,
    actors: null,
    directors: [],
    loading: false
  }

  // 2. نوشتن لایف سایکل مناسب برای چرخه
  componentDidMount () {
    this.setState({ loading: true });
    //loading had been set to true because we need to fetch the data
    const endPoint = `${API_URL}movie/${this.props.match.params.movieId}?api_key=${API_KEY}&lang=en-US`;
    //دلدل ساخته شدن نقطه پایان رو نمیدونم
    //حالا میخواهیم فچ کنیم چجوری این کار رو میکردیم؟

    //دلیل ساختن نقطه پایان اینه که به فج بگیم از کجا فچ کنه
    //فچ رو هم توی لایف سایکل صدا میزنیم و براش یه فانکشن مینویسیم
    this.fetchItems(endPoint);
  }

  fetchItems  = (endPoint) => {
    //we fetch with endPoint
    //we get a result and convert it to json
    //then the magic happens!
    //چرا اکولاد گذاشت؟
    fetch(endPoint)
    .then(result => result.json())
    .then(result => {
      //این جا مجبوریم چک کنیم فیلمی باشه که 404 نشونمون نده
      if(result.status_code) {
        this.setState({ loading: false });
        //it means we didnt got any movie!
      } else {
        //here we got the movie 
        //so we must fill out state with the data
        this.setState({ movie: result }, () => {
          //it seems the magic is going to happen again!
          //we are going to fetch the actors here!
          //so my guess was true it is not in the movie and we shold make another end point!
          const endPoint = `${API_URL}movie/${this.props.match.params.movieId}/credits?api_key=${API_KEY}`;
          //now we made a new endpoint now we need to fetch new data from api
          fetch(endPoint)
          .then(result => result.json())
          .then( result => {
            //now we have the data is a json format
            //so we get the directors => it's how depends on where are they!
            const directors = result.crew.filter( member => member.jon === "Director" );

            this.setState({ 
              directors: directors,
              actors: result.cast,
              loading: false
             })
          })
        });
        //الان میخواد بعد ست کردن استیت بیاد و یه کار دیگه هم بکنه مثلا
        //این جا میخواد بازیگرا رو هم بگیره خببببب چجوری؟
      }

    })
  }
  
  render(){
    return (
      <div className="rmdb-movie">
        <Navigation />
        <MovieInfo />
        <MovieInfoBar />
        <FourColGrid />
        <Spinner />
      </div>
    )
  }
}

export default Movie;
