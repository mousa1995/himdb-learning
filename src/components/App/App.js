import React from 'react';
import { Router, Route ,  BrowserRouter, Switch} from 'react-router-dom';
import Header from  '../elements/Header/Header';
import Home from '../Home/Home';


const App = () => {
  return (
    <BrowserRouter>
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

export default App;