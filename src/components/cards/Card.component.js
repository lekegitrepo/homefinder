/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import FavButton from '../button/FavouriteButton';

const Card = ({
  detail, local, cssClass, price,
}) => {
  const {
    id, home_type, description, image_link, location,
  } = detail;

  console.log(cssClass);

  const currentUser = useSelector(state => state.currentUser);

  return (
    <div className={cssClass.length > 0 ? cssClass : 'card'}>
      <div className="card__image">
        <img
          src={local === true ? image_link : `https://homefinderapi.herokuapp.com/${image_link}`}
          alt="house"
        />
      </div>
      <div className="card__detail">
        <div className="card__detail__container">
          <div className="card__detail__title">{ home_type }</div>
          <div className="card__detail__description">{ description }</div>
          <div className="card__detail__address">{ location }</div>
          <div className="card__detail__btn">
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
        <div className="card__detail__price">
          { price }
          <span>per month</span>
        </div>
      </div>
    </div>
  );
};

Card.defaultProps = {
  detail: {},
  local: false,
  cssClass: '',
  price: '$0.00',
};

Card.propTypes = {
  detail: PropTypes.instanceOf(Object),
  local: PropTypes.bool,
  cssClass: PropTypes.string,
  price: PropTypes.number,
};

export default Card;
