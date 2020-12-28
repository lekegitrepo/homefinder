/* eslint-disable camelcase */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { postFavouriteHomeRequest } from '../../services/apiRequests.services';

const FavButton = ({
  id, icon, picked, userObj,
}) => {
  const [state, setState] = useState(picked);
  const { user } = userObj;
  console.log('This is user:', user.auth_token);

  const handleClick = () => postFavouriteHomeRequest('favourites', { id }, user.auth_token).then(resp => {
    console.log('This is handleClick');
    if (resp.statusText === 'Created') {
      setState(!state);
      console.log(resp);
      console.log('This is state:', state);
    }
  }).catch(err => {
    console.log('Unable to add home as the favourite', err);
  });

  return (
    <button
      type="submit"
      onClick={handleClick}
      className={state === true ? 'filled' : 'unfilled'}
    >
      { state === true ? `${icon}` : 'unfilled' }
    </button>
  );
};

FavButton.defaultProps = {
  id: 0,
  icon: <i />,
  picked: false,
  userObj: {},
};

FavButton.propTypes = {
  id: PropTypes.number,
  icon: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.elementType,
    PropTypes.string,
  ]),
  picked: PropTypes.bool,
  userObj: PropTypes.instanceOf(Object),
};

export default FavButton;
