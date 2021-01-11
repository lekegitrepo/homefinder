/* eslint-disable camelcase */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { postFavouriteHomeRequest, deleteFavouriteHomeRequest } from '../../services/apiRequests.services';
import actions from '../../actions/index.actions';

const FavButton = ({ id, picked, userObj }) => {
  /* let currentValue;
  if (picked === null) {
    currentValue = false;
  } else if (picked === false) {
    currentValue = false;
  } else {
    currentValue = true;
  } */
  const dispatch = useDispatch();
  const [state, setState] = useState(picked);
  const favourite = useSelector(state => state.favouriteHomes);
  const { user } = userObj;

  const handleCreateFavourite = () => postFavouriteHomeRequest('favourites', { id }, user.auth_token).then(resp => {
    if (resp.statusText === 'Created') {
      setState(!state);
      const dis = dispatch(actions.homeActions.addFavourite({
        obj: resp.data,
        homeId: id,
      })); // homeId: resp.data.favourites.id,
      console.log('This is a favourite home:', favourite);
      console.log(resp);
      console.log('This is state and dispatch:', state, dis);
    }
  }).catch(err => {
    console.log('Unable to add home as the favourite', err);
  });

  const fetchFavouriteHome = (list, homeId) => {
    const id = list.filter(home => home.homeId === homeId);
    return id[0].fav.favourites.id;
  };

  const handleRemoveFavourite = () => {
    const favId = fetchFavouriteHome(favourite, id);
    deleteFavouriteHomeRequest('remove_fav', { id: favId }, user.auth_token).then(resp => {
      if (resp.statusText === 'No Content') {
        setState(!state);
        dispatch(actions.homeActions.removeFavourite({ id }));
      }
    }).catch(err => {
      console.log('Unable to add home as the favourite', err);
    });
  };

  const handleClick = currentState => ((currentState === false)
    ? handleCreateFavourite : handleRemoveFavourite);

  return (
    <button
      type="submit"
      onClick={handleClick(state)}
      className="btn-like"
    >
      { state === false ? <i className="far fa-heart" /> : <i className="fas fa-heart" /> }
    </button>
  );
};

FavButton.defaultProps = {
  id: 0,
  picked: false,
  userObj: {},
};

FavButton.propTypes = {
  id: PropTypes.number,
  picked: PropTypes.bool,
  userObj: PropTypes.instanceOf(Object),
};

export default FavButton;
