import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Card from '../components/Card.component';

describe('Render Card component', () => {
  const initialState = {};
  const mockStore = configureStore();
  let store;

  test('render the Card component', () => {
    store = mockStore(initialState);
    const wrapper = shallow(
      <Provider store={store}>
        <Card />
      </Provider>,
    );
    expect(wrapper.exists()).toBe(true);
  });
});
