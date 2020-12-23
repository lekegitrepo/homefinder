const favouriteHomes = (state = [], action) => {
  switch (action.type) {
    case 'ADD_HOME':
      return [...state, action.payload];
    case 'REMOVE_HOME':
      return state.filter(item => item.id !== action.payload.id);
    default:
      return state;
  }
};

export default favouriteHomes;
