/* eslint-disable camelcase */

import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from '../Navbar.component';
import FavButton from '../button/FavouriteButton';

const HomeDetail = () => {
  const urlData = useLocation();
  const currentUser = useSelector(state => state.currentUser);

  const {
    id, description, location, home_type, image_link, price, picked,
  } = urlData.state;
  console.log('This is location state:', urlData.state);

  return (
    <section>
      <Navbar cssClass="u-padding-left u-bg-color" />
      <div className="home-list__header">
        <h3 className="heading-secondary">Your Dream House</h3>
      </div>
      <div className="home">
        <div className="home__header">
          <h3 className="heading-secondary">{ home_type }</h3>
        </div>
        <div className="home__image">
          <img
            src={`https://homefinderapi.herokuapp.com/${image_link}`}
            alt="house"
          />
          <div className="home__like__btn">
            {currentUser.loggedIn === true
              ? (
                <FavButton
                  id={id}
                  picked={picked}
                  userObj={currentUser}
                />
              )
              : ''}
          </div>
        </div>
        <div className="home__detail">
          <div className="home__detail__container">
            <div className="home__detail__description">{ description }</div>
            <div className="home__detail__location">{ location }</div>
          </div>
        </div>
        <div className="home__detail__price">
          $
          { price }
          <span>per month</span>
        </div>
      </div>
    </section>
  );
};

export default HomeDetail;
