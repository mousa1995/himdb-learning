import React from 'react';
import './Home.css';
import '../elements/HeroImage/Heroimage';
import HeroImage from '../elements/HeroImage/Heroimage';
import FourColGrid from  '../elements/FourColGrid/FourColGrid';
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
    if( localStorage.getItem('Home') ) {
      const state = JSON.parse(localStorage.getItem('Home'));

      this.setState({ ...state });
    } else {this.setState({
      //کد زیر برای نشان داده شدن لودینگ هست
      loading: true
    });
    // حالا یو ار الی را که میخواهیم از ان داده را فچ کنیم مشخص میکنیم
    const endPoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    this.fetchItems(endPoint);
    //نمیدونم چرا فچ ایتمس رو ادیتور نیورد}
  }
  //خب چجوری داده رو از لوکال استورج در میاریم
  //مثلا مثل الان قبل از لایف سایکل میام و چک میکنم اگه چیزی که من دنبالشم بود نمیگیرم

  searchItems = (searchTerm) => {
    console.log(searchTerm)
    const endPoint = '';
    this.setState({
      movie: [],
      loading: true,
      searchTerm
    });
    //movie: [] --------علت این کد اینه ک زمانی که میخواهیم سرچ کنیم نمیخواهیم بقیه فیلم ها نشون داده بشه
    if(endPoint === ''){
      const endPoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    }else {
      const endPoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}`;
    }
    this.fetchItems(endPoint);
    //ایف که میدونی چه میکنه الز
    //میاد سرچ میکنه
  }

  loadMoreItems = () => {
    //این با درست کردن یو ار ال سر و کار داره
    let endPoint = '';
    this.setState({loading: true});

    //ایف چک میکنه که ما چیزی سرچ نمیکنیم و پس از ان صفحه بعد مشهور ترین فیلم ها رو میاره
    //الز => میاد چک میکنه که سرچ میکنیم و یو ار ال را برای سرچ درست میکنه
    if(this.state.searchTerm === ''){
      endPoint = `${API_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${this.state.currentPage + 1}`
      console.log(this)
    }else{
      endPoint = `${API_URL}/movie/popular?api_key=${API_KEY}&language=en-US&query=${this.state.searchTerm}&page=${this.state.currentPage + 1}`
    }
    this.fetchItems(endPoint);
  }

  //حواست باشه که داریم توی کلاس چیز میز مینویسیم همین جوری کانست ننویسی
  fetchItems = (endPoint) => {
    //فچ مال ای اس شش است و چه پرامیس برمیگردونه پس دن میگیره
    fetch(endPoint)
    .then(result => result.json())
    .then(result => {
      console.log(result),
      this.setState({
        //در کد زیر ما کپی از فیلم هایی که در استیت هستند میگیریم و نهایتا به فیلم هایی که میایند اضافه میکنیم
        movie: [...this.state.movie, ...result.results],
        HeroImage: this.state.HeroImage || result.results[0],
        loading: false,
        currentPage: result.page,
        totalPages: result.total_pages,
      }, () => {
        localStorage.setItem('Home', JSON.stringify(this.state));
      });
    });
      //توی کد بالا بلافاصله بعد از این که استیت دادیم بعد فچ کردن داده میایم و یک کالبک فانکشن مینویسیم
    //میاد بلافاصله یک ایتم میسازه
    //ست ایتم 2 تا چیز میگیره یکی این که چه اسمی براش بگذاریم
    //دوم این که بتونیم تبدیلش بکنیم به استرینگ




    // .then(result => result.json())
    //کد بالا => زمانی که نتیجه پرامیس امد داده خام است پس ان را به جیسون تبدیل میکنیم
  }
  
  render(){

    const { movie, HeroImage, loading, currentPage, totalPages } = this.state;
    const { prop1, prop2 } = this.state;
    //بعدشم کل دیس دات استیت و دیس دات پروپ را حذف میکنیم
    //اینم از روش دیستراکت کردن توی کلاسیکال کامپوننت ها

    return (
      <div className="rmdb-home">
        {this.state.HeroImage ? <div>
         <HeroImage
          image = {`${IMAGE_BASE_URL}${BACKDROP_SIZE}${this.state.HeroImage.backdrop_path}`}
          title = {this.state.HeroImage.original_title}
          text = {this.state.HeroImage.overview}
          //این جا ارور میگیریم چونکه اول داده باید داخل استیت رفته باشه که اندیفیاند نده
         />
         <SearchBar callback={this.state.searchTerm}/>
        </div> : null}
        <div className="rmdb-home-grid">
          <FourColGrid 
            header = {this.state.searchTerm ? 'Search result' : 'Popular Movies'}
            loading = {this.state.loading}
          > 
          {/* این جا فیلم ها رو از استیت میگیریم و روش میچرخیم */}
          {this.state.movie.map((element, i) => {
            return(
              <MovieThumb
                key={i}
                clickable = {true}
                image = {element.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${element.poster_path}`: './images/no_image.jpeg'}
                movieId = {element.id}
                movieName = {element.original_title}
              />
            )
          })}
          </FourColGrid>
          {this.state.loading ? <Spinner />: null}
          {/* کد بالا چیز جدیدی نداره */}
          {(this.state.currentPage <= this.state.totalPages && !this.state.loading) ?
          <LoadMoreBtn text = "Load More" onClick = {this.loadMoreItems} /> : null
          }
        </div>
        
      </div>
    );
  }

}

export default Home;
//ساختار نهایی خانه
// کلاس است و استیت دارد
//چیزی را رندر و رندر چیزی را ریترن میکند
// نهایتا اکسپورت دیفالت میشود
