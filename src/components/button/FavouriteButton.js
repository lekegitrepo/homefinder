/* eslint-disable camelcase */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import { postFavouriteHomeRequest, deleteFavouriteHomeRequest, getFavouriteHomesRequest } from '../../services/apiRequests.services';
import actions from '../../actions/index.actions';

const FavButton = ({ id, picked, userObj }) => {
  const dispatch = useDispatch();
  const [state, setState] = useState(picked);
  const [status, setStatus] = useState({ loading: false, error: false, data: '' });
  const { user } = userObj;

  const fetchFavourites = async () => {
    setStatus({ loading: true });
    await getFavouriteHomesRequest('favourites', user.auth_token).then(res => {
      if (res.statusText === 'OK') {
        dispatch(actions.homeActions.selectAllFavourites(res.data.favourites));
        setStatus({ loading: false, error: false, data: '' });
      } else {
        setStatus({ loading: false, error: true, data: '' });
      }
    }).catch(error => setStatus({ loading: false, error: true, data: error }));
  };

  const handleCreateFavourite = () => postFavouriteHomeRequest('favourites', { id }, user.auth_token).then(resp => {
    if (resp.statusText === 'Created') {
      setState(!state);
      dispatch(
        actions.homeActions.addFavourite(resp.data.favourites),
      );
      fetchFavourites();
    }
  }).catch(error => setStatus({ loading: false, error: true, data: error }));

  const handleRemoveFavourite = () => {
    deleteFavouriteHomeRequest('remove_fav', { id }, user.auth_token).then(resp => {
      if (resp.statusText === 'No Content') {
        setState(!state);
        dispatch(actions.homeActions.removeFavourite({ id }));

        fetchFavourites();
      }
    }).catch(error => setStatus({ loading: false, error: true, data: error }));
  };

  const handleClick = currentState => ((currentState === false)
    ? handleCreateFavourite : handleRemoveFavourite);

  const iconRender = () => {
    if (state === false) {
      return <i className="far fa-heart" />;
    }
    return <i className="fas fa-heart" />;
  };

  return (
    <button
      type="submit"
      onClick={handleClick(state)}
      className="btn-like"
    >
      {
        status.loading === true
          ? (
            <div>
              <Loader type="Bars" height={15} width={15} color="#cf3917" />
            </div>
          )
          : iconRender()
      }
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
