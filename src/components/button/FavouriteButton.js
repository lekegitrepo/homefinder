/* eslint-disable camelcase */
import React, { useState } from 'react';
import { useDispatch /* useSelector */ } from 'react-redux';
import PropTypes from 'prop-types';
import { postFavouriteHomeRequest, deleteFavouriteHomeRequest, getFavouriteHomesRequest } from '../../services/apiRequests.services';
import actions from '../../actions/index.actions';

const FavButton = ({ id, picked, userObj }) => {
  const dispatch = useDispatch();
  const [state, setState] = useState(picked);
  const { user } = userObj;

  const fetchFavourites = async () => {
    await getFavouriteHomesRequest('favourites', user.auth_token).then(res => {
      if (res.statusText === 'OK') {
        dispatch(actions.homeActions.selectAllFavourites(res.data.favourites));
      } else {
        console.log('todo populate registration error');
      }
    }).catch(error => {
      console.log('registrations error', error);
    });
  };

  const handleCreateFavourite = () => postFavouriteHomeRequest('favourites', { id }, user.auth_token).then(resp => {
    if (resp.statusText === 'Created') {
      setState(!state);
      dispatch(
        actions.homeActions.addFavourite(resp.data.favourites),
      );
      fetchFavourites();
    }
  }).catch(err => {
    console.log('Unable to add home as the favourite', err);
  });

  const handleRemoveFavourite = () => {
    deleteFavouriteHomeRequest('remove_fav', { id }, user.auth_token).then(resp => {
      if (resp.statusText === 'No Content') {
        setState(!state);
        dispatch(actions.homeActions.removeFavourite({ id }));

        fetchFavourites();
      }
    }).catch(err => {
      console.log('Unable to add home as the favourite', err);
    });
  };

  const handleClick = currentState => ((currentState === false)
    ? handleCreateFavourite : handleRemoveFavourite);

  /* const handleClick = currentState => {
    if (currentState === false) {
      handleCreateFavourite();
    } else {
      handleRemoveFavourite();
    }

    // fetchFavourites();
  }; */

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
