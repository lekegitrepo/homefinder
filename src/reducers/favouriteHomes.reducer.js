const favouriteHomes = (state = [], action) => {
  switch (action.type) {
    case 'ADD_HOME':
      return [...state,
        {
          fav: action.payload.obj,
          homeId: action.payload.homeId,
          picked: true,
        },
      ];
    case 'FETCH_FAV_HOME':
      return [...state];
    case 'REMOVE_HOME':
      return state.filter(item => item.homeId !== action.payload.id);
    default:
      return state;
  }
};

export default favouriteHomes;
