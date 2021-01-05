/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import FavButton from '../button/FavouriteButton';

const Card = ({ detail }) => {
  const {
    id, home_type, description, image_link, location,
  } = detail;

  const currentUser = useSelector(state => state.currentUser);

  return (
    <div>
      <h1>{ home_type }</h1>
      <div>
        <img src={`https://homefinderapi.herokuapp.com/${image_link}`} alt="house" style={{ width: '200px', height: '200px' }} />
      </div>
      <div>
        <div>{ id }</div>
        <div>{ home_type }</div>
        <div>{ description }</div>
        <div>{ location }</div>
        {currentUser.loggedIn === true
          ? (
            <FavButton
              id={id}
              icon="icon"
              picked={false}
              userObj={currentUser}
            />
          )
          : ''}
      </div>
    </div>
  );
};

Card.defaultProps = {
  detail: {},
};

Card.propTypes = {
  detail: PropTypes.instanceOf(Object),
};

export default Card;
