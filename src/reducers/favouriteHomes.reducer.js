const favouriteHomes = (state = { favourites: [] }, action) => {
  switch (action.type) {
    case 'ADD_HOME':
      return { ...state, favourites: [...state.favourites, action.payload] };
    case 'ALL_FAV_HOMES':
      return { ...state, favourites: [...action.payload] };
    case 'REMOVE_HOME':
      return state.favourites.filter(item => item.id !== action.payload.id);
    default:
      return state;
  }
};

export default favouriteHomes;
