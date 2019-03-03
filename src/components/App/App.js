import React from 'react';
import { Router, Route ,  BrowserRouter, Switch} from 'react-router-dom';
import Header from  '../elements/Header/Header';
import Home from '../Home/Home';
import Movie from '../Movie/Movie';
import NotFound from '../elements/NotFound/NotFound';


const App = () => {
  return (
    <BrowserRouter basename="subDomain!">
      <React.Fragment>
      <Header/>
      <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/:movieId" component={Movie} exact/>
      <Route component={NotFound}/>

      </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
}

//نکته دوم اینه که لینک هاشو گفت من بصورت مطلق میگذارم کار میکنه ببینید برای شما چجوریه

export default App;