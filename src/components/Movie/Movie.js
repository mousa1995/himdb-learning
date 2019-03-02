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

  const fetchItems  = () => {

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
