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
    console.log("from navigation" , this.props)
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
            console.log(result)
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

    }).catch(error => console.error('ERROR:', error))
    //توی گرفتن اررور ما امدیم جایی که فچ داره رو کچ کردیم
  }
  
  render(){
    return (
      <div className="rmdb-movie">
        {/* اول چک میکنیم که توی استیت فیلم باشه */}
        {this.state.movie ? 
        <div>
         <Navigation movie={this.props.location.movieName} />
         {/* // این چیزی که بالاس همونیه که توی اپ با پراپ فرستادیم درواقع شناسه متحرک اینه */}
         <MovieInfo movie={this.state.movie} directors={this.state.directors}  />
        <MovieInfoBar time={this.state.movie.runtime} budget={this.state.movie.budget} revenue={this.state.movie.revenue} />
        </div>
        : null }
        {/* مشخصات فیلم رو فرستادیم */}

        {/* حالا چک میکنیم بازیگر داشته باشه بعد مثل بالا یی رد میکنیم */}
        {
          this.state.actors ?
          <div className="rmdb-movie-grid">
            <FourColGrid header={'Actors'}>
            {this.state.actors.map((element, i)=> {
              return <Actor key={i} actor={element} />
            })}
            </FourColGrid>
          </div>
          : null
        }

        {/* چک میکنیم ادم مریضی عدد الکی نفرسته با چک کردن بازیگر */}
        {!this.state.actors && !this.state.loading ? <h1> No Movie Found </h1> : null }

        {/* لودینگ باشه نشون بده داره لودینگ میشه */}
        {this.state.loading ? <Spinner/> : null}

      </div>
    )
  }
}

export default Movie;
