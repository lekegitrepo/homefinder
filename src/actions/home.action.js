const addFavourite = homeObj => ({
  type: 'ADD_HOME',
  payload: homeObj,
});

const selectFavourites = () => ({
  type: 'SELECT_FAV_HOMES',
});

const selectAllFavourites = () => ({
  type: 'ALL_FAV_HOMES',
});

const removeFavourite = homeObj => ({
  type: 'REMOVE_HOME',
  payload: homeObj,
});

export default {
  addFavourite, removeFavourite, selectFavourites, selectAllFavourites,
};
