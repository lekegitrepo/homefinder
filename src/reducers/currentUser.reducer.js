const currentUser = (state = { user: {}, loggedIn: false }, action) => {
  switch (action.type) {
    case 'CREATE_USER':
      return {
        ...state, user: action.payload, loggedIn: true,
      };
    case 'LOGOUT':
      return {
        ...state, user: {}, loggedIn: false,
      };
    case 'ERROR':
      return {
        ...state, user: {}, loggedIn: false,
      };
    default:
      return state;
  }
};

export default currentUser;
