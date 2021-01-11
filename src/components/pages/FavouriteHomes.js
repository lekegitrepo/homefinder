/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { v4 } from 'uuid';
import { getFavouriteHomesRequest } from '../../services/apiRequests.services';
import Card from '../cards/Card.component';

const FavouriteHomes = () => {
  const [list, setList] = useState([]);
  const currentUser = useSelector(state => state.currentUser);

  useEffect(() => {
    getFavouriteHomesRequest('favourites', currentUser.user.auth_token).then(response => {
      if (response.statusText === 'OK') {
        setList(response.data);
        // console.log('This is the response:', response.data);
        // console.log('This is the List:', list);
      } else {
        console.log('todo populate registration error');
      }
    }).catch(error => {
      console.log('registrations error', error);
    });
  }, [setList]);

  return (
    <section className="home-list">
      <div className="home-list__header">
        <h3 className="heading-secondary">List of your Favourite Houses</h3>
      </div>
      <div className="home-list__row">
        {
          (list.length === 0)
            ? <h3>No Favourite Houses</h3>
            : list.favourites.map(item => <Card key={v4()} detail={item} />)
        }
      </div>
      <Link to="/">
        Back to Home page
      </Link>
    </section>
  );
};

export default FavouriteHomes;
