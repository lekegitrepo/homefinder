import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store/index.store';
import Home from '../components/pages/Home';
import PageNotFound from '../components/pages/PageNotFound.page';
import Homes from '../components/pages/Homes.index.page';
import HomeDetail from '../components/pages/Home.show.page';
import FavouriteHomes from '../components/pages/FavouriteHomes';
import Login from '../components/auth/Login';
import Registration from '../components/auth/Registration';

const PageRouter = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route exact path='/registration'>
          <Registration />
        </Route>
        <Route exact path='/homes'>
          <Homes />
        </Route>
        <Route exact path='/home/:id'>
          <HomeDetail />
        </Route>
        <Route exact path='/favourites'>
          <FavouriteHomes />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </Router>
  </Provider>
)

export default PageRouter;