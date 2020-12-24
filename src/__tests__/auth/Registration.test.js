import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux'
import configureStore from "redux-mock-store";
import Registration from '../../components/auth/Registration';

describe('render Registration component', () => {
  const initialState = {};
  const mockStore = configureStore();
  let store;

  test('check for the existence of the component', () => {
    store = mockStore(initialState);
    const wrapper = shallow(<Provider store={store}> <Registration /> </Provider>);
    expect(wrapper.exists()).toBe(true);
  });
})
