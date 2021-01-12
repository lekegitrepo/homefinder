const favouriteHomes = (state = { favourites: [] }, action) => {
  // console.log('This is state object from reducer 1:', state);
  switch (action.type) {
    case 'ADD_HOME':
      return { ...state, favourites: [...state.favourites, action.payload] };
    case 'ALL_FAV_HOMES':
      console.log('This is state object from reducer 2:', { ...state, favourites: [...action.payload] });
      return { ...state, favourites: [...action.payload] };
    case 'REMOVE_HOME':
      return state.favourites.filter(item => item.id !== action.payload.id);
    default:
      return state;
  }
};

export default favouriteHomes;
