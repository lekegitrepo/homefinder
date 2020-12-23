const addFavourite = homeObj => ({
  type: 'ADD_HOME',
  payload: homeObj,
});

const removeFavourite = homeObj => ({
  type: 'REMOVE_HOME',
  payload: homeObj,
});

export default { addFavourite, removeFavourite };
