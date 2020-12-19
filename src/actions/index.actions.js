const actions = {
  SIGN_IN: 'SIGN_IN',
};

const signIn = authStatus => (
  {
    type: actions.ADD_RECIPES,
    authStatus,
  }
);

export { actions, signIn };
