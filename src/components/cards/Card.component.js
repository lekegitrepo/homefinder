/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import FavButton from '../button/FavouriteButton';

const Card = ({
  detail, local, cssClass, price, likeButton,
}) => {
  const { id, home_type, image_link } = detail;
  // console.log('This is the detail:', detail);

  const currentUser = useSelector(state => state.currentUser);

  return (
    <div className={cssClass.length > 0 ? cssClass : 'card'}>
      <div className="card__image">
        <Link to={{ pathname: cssClass.length > 0 ? '/' : `/home/${id}`, state: detail }}>
          <img
            src={local === true ? image_link : `https://homefinderapi.herokuapp.com/${image_link}`}
            alt="house"
          />
        </Link>
      </div>
      <div className="card__detail">
        <div className="card__detail__container">
          <div className="card__detail__title">{ home_type }</div>
          <div className="card__detail__btn">
            {currentUser.loggedIn === true && likeButton === true
              ? (
                <FavButton
                  id={id}
                  picked={detail.picked}
                  userObj={currentUser}
                />
              )
              : ''}
          </div>
        </div>
        <div className="card__detail__price">
          $
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
  price: 0.0,
  likeButton: true,
};

Card.propTypes = {
  detail: PropTypes.instanceOf(Object),
  local: PropTypes.bool,
  cssClass: PropTypes.string,
  price: PropTypes.number,
  likeButton: PropTypes.bool,
};

export default Card;
