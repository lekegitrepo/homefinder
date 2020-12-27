import React from, { useState } 'react';
import PropTypes from 'prop-types';
import { postFavouriteHomeRequest } from '../../services/apiRequests.services';

const FavButton = ({ id, icon, picked }) => {
  const [state, setState] = useState(picked);

  const handleClick = () => postFavouriteHomeRequest('homes', id).then(resp => {
    if (resp.statusText === 'Created') {
      setState(!picked)
      console.log(resp)
    }
  }).catch(err => {
    console.log('Unable to add home as the favourite', err)
  })

  return (
    <button
      onClick={handleClick}
      className={state === true ? 'filled' : 'unfilled'}
    >
      { icon }
    </button>
  )
}

FavButton.defaultProps = {
  id: 0,
  icon: <i></i>,
  picked: false,
}

FavButton.propTypes = {
  id: PropTypes.number,
  icon: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.elementType,
  ]),
  picked: PropTypes.bool,
}

export default FavButton;
