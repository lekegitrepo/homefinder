import actions from '../../actions/index.actions';

const { userActions, homeActions } = actions;

const user = {
  id: 1,
  fullname: 'John Doe',
  username: 'JohnD',
  email: 'john@gmail.com',
};

const home = {
  id: 1,
  home: 'Apartment',
  description: 'This is a beautiful',
  location: 'Urban',
};

describe('user actions', () => {
  const { createUser, logout } = userActions;
  test('create user action', () => {
    const object = Object.values(createUser(user));
    expect(object).toEqual(['CREATE_USER', user]);
  });

  test('logout action', () => {
    const object = Object.values(logout());
    expect(object).toEqual(['LOGOUT']);
  });
});

describe('home actions', () => {
  const { addFavourite, removeFavourite } = homeActions;
  test('add favourite action', () => {
    const object = Object.values(addFavourite(home));
    expect(object).toEqual(['ADD_HOME', home]);
  });

  test('remove favourite action', () => {
    const object = Object.values(removeFavourite(home));
    expect(object).toEqual(['REMOVE_HOME', home]);
  });
});
