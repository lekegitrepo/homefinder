import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Login from '../../components/auth/Login';

describe('render Login component', () => {
  const initialState = {};
  const mockStore = configureStore();
  let store;

  test('render the Login component', () => {
    store = mockStore(initialState);
    const wrapper = shallow(<Provider store={store}>
      {' '}
      <Login />
      {' '}
    </Provider>);
    expect(wrapper.exists()).toBe(true);
  });
});
