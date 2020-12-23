import actions from '../../actions/index.actions';

const { userActions, homeActions } = actions;

const user = {
  id: 1,
  fullname: 'John Doe',
  username: 'JohnD',
  email: 'john@gmail.com'
}

describe('user actions', () => {
  const { createUser, logout } = userActions;
  test('create user action', () => {
    const object = Object.values(createUser(user));
    expect(object).toEqual(['CREATE_USER', user])
  })

  test('logout action', () => {
    const object = Object.values(logout());
    expect(object).toEqual(['LOGOUT'])
  })
})
