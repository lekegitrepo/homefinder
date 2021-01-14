/* eslint-disable camelcase */
// import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { v4 } from 'uuid';
import Card from '../cards/Card.component';
import Navbar from '../Navbar.component';
import Error from '../Error.component';

const FavouriteHomes = () => {
  const currentUser = useSelector(state => state.currentUser);
  const list = useSelector(state => state.favouriteHomes);

  if (!currentUser.user) {
    return (<Error content="to view the list of your favourites houses" title="" nav />);
  }

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
