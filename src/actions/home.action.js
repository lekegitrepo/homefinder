const addFavourite = homeObj => ({
  type: 'ADD_HOME',
  payload: homeObj,
});

const allFavourites = () => ({
  type: 'FETCH_FAV_HOMES',
});

const selectFavourites = () => ({
  type: 'SELECT_FAV_HOMES',
});

const removeFavourite = homeObj => ({
  type: 'REMOVE_HOME',
  payload: homeObj,
});

export default {
  addFavourite, removeFavourite, allFavourites, selectFavourites,
};
