import currentUser from '../../reducers/currentUser.reducer';
import actions from '../../actions/index.actions';

const { userActions } = actions;

const user = {
  id: 1,
  fullname: 'John Doe',
  username: 'JohnD',
  email: 'john@gmail.com',
};

describe('create user state', () => {
  test('default state', () => {
    const defaultState = currentUser({}, {});
    expect(defaultState).toEqual({});
  });

  test('create state for the current user', () => {
    const { createUser } = userActions;
    const userCurrentState = currentUser({}, createUser(user));
    expect(userCurrentState.user).toEqual(user);
  });
});

describe('user logout state', () => {
  test('create state for the current user', () => {
    const { createUser } = userActions;
    const userCurrentState = currentUser({}, createUser(user));
    expect(userCurrentState.user).toEqual(user);
  });

  test('create state for the user logout', () => {
    const { logout } = userActions;
    const userLogoutState = currentUser(user, logout());
    expect(userLogoutState.user).toEqual({});
  });
});
