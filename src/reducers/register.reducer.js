import { actions } from '../actions/index.actions';

const { SIGN_IN } = actions;

const register = (state = [], actions) => {
  switch (actions.type) {
    case SIGN_IN:
      return [...state, actions.recipe];
    default:
      return state;
  }
};

export default register;
