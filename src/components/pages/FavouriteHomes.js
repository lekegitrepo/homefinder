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
  const favouriteHomes = useSelector(state => state.favouriteHomes);
  console.log('This is favouriteHomes state outside:', favouriteHomes);
  const [list, setList] = useState([]);
  console.log('This is List outside:', list);

  const fetchFavourites = async () => {
    await getFavouriteHomesRequest('favourites', currentUser.user.auth_token).then(res => {
      if (res.statusText === 'OK') {
        setList(res.data);
        dispatch(actions.homeActions.selectAllFavourites(res.data.favourites));
        // console.log('This is the res from favouriteHomes:', res.data.favourites);
        // console.log('This is the List:', list);
        // setLoading(true);
        // console.log('This is favourite inside res:', favouriteHomes);
        // console.log('This is List inside:', list);
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
      <Navbar />
      <div className="home-list__header">
        <h3 className="heading-secondary">List of your Favourite Houses</h3>
      </div>
      <div className="home-list__row">
        {
          (list.length === 0)
            ? <h3>No Favourite Houses</h3>
            : list.favourites.map(item => <Card key={v4()} detail={item} likeButton={false} />)
        }
      </div>
      <Link to="/">
        Back to Home page
      </Link>
    </section>
  );
};

export default FavouriteHomes;
