/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { v4 } from 'uuid';
import { getFavouriteHomesRequest } from '../../services/apiRequests.services';
import Card from '../cards/Card.component';
import Navbar from '../Navbar.component';
import actions from '../../actions/index.actions';

const FavouriteHomes = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.currentUser);
  // const favouriteHomes = useSelector(state => state.favouriteHomes);
  const [list, setList] = useState({ favourites: [] });

  if (!currentUser.user) {
    return (
      <section className="">
        <Navbar cssClass="u-padding-left u-bg-color" />
        <div className="u-center-text">
          <h3 className="heading-secondary">User not logged in</h3>
          <p>
            Please,
            <Link to="/login"> log in </Link>
            or
            <Link to="/registration"> sign up </Link>
            to view the list of your Favourite House(s)
          </p>
        </div>
      </section>
    );
  }

  const fetchFavourites = async () => {
    await getFavouriteHomesRequest('favourites', currentUser.user.auth_token).then(res => {
      if (res.statusText === 'OK') {
        setList({ favourites: res.data.favourites });
        dispatch(actions.homeActions.selectAllFavourites(res.data.favourites));
      } else {
        console.log('todo populate registration error');
      }
    }).catch(error => {
      console.log('registrations error', error);
    });
  };

  useEffect(() => {
    fetchFavourites();
  }, [setList]);

  return (
    <section className="home-list">
      <Navbar cssClass="u-padding-left u-bg-color" />
      <div className="home-list__header">
        <h3 className="heading-secondary">List of your Favourite Houses</h3>
      </div>
      <div className="home-list__row">
        {
          (list.favourites.length === 0)
            ? (
              <h3 className="instruction">
                You have not picked any Favourite House.
                <p>
                  View the list of available
                  <Link to="/homes" className="link"> Houses </Link>
                  and pick your Favourite House(s)
                </p>
              </h3>
            )
            : list.favourites.map(item => <Card key={v4()} detail={item} likeButton={false} />)
        }
      </div>
    </section>
  );
};

export default FavouriteHomes;
