import React from 'react';
import Header from  '../elements/Header/Header';
import FourColGrid from  '../elements/FourColGrid/FourColGrid';
import Heroimage from  '../elements/HeroImage/Heroimage';
import LoadMoreBtn from  '../elements/LoadMoreBtn/LoadMoreBtn';
import MovieThumb from  '../elements/MovieThumb/MovieThumb';
import SearchBar from  '../elements/SearchBar/SearchBar';
import Spinner from  '../elements/Spinner/Spinner';
import Home from '../Home/Home';


const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Home />
    </React.Fragment>
  );
}

export default App;