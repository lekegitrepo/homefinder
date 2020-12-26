const createUser = user => ({
  type: 'CREATE_USER',
  payload: user,
});

const logout = () => ({
  type: 'LOGOUT',
});

export default { createUser, logout };
