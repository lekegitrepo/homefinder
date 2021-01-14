const createUser = user => ({
  type: 'CREATE_USER',
  payload: user,
});

const logout = () => ({
  type: 'LOGOUT',
});

const userError = () => ({
  type: 'ERROR',
});

export default { createUser, logout, userError };
