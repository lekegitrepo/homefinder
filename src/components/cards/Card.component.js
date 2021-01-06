/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import FavButton from '../button/FavouriteButton';

const Card = ({ detail, local, cssClass }) => {
  const {
    id, home_type, description, image_link, location,
  } = detail;

  console.log(cssClass);

  const currentUser = useSelector(state => state.currentUser);

  return (
    <div className={cssClass.length > 0 ? cssClass : 'card'}>
      <h1>{ home_type }</h1>
      <div>
        <img
          src={local === true ? image_link : `https://homefinderapi.herokuapp.com/${image_link}`}
          alt="house"
          style={{ width: '200px', height: '200px' }}
        />
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
  local: false,
  cssClass: '',
};

Card.propTypes = {
  detail: PropTypes.instanceOf(Object),
  local: PropTypes.bool,
  cssClass: PropTypes.string,
};

export default Card;
