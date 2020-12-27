/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ detail }) => {
  const {
    id, home_type, description, image_link, location,
  } = detail;
  console.log('props: ', id, description);
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
      </div>
    </div>
  );
};

Card.defaultProps = {
  detail: {},
  /* id: 0,
  home_type: '',
  description: '',
  image_link: '',
  location: '', */
};

Card.propTypes = {
  detail: PropTypes.instanceOf(Object),
  /* id: PropTypes.number,
  home_type: PropTypes.string,
  description: PropTypes.string,
  image_link: PropTypes.string,
  location: PropTypes.string, */
};

export default Card;
