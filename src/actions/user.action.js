const createUser = (user) => {
  return {
    type: 'CREATE_USER',
    payload: user,
  }
}

const logout = () => {
  return {
    type: 'LOGOUT'
  }
}

export { createUser, logout }