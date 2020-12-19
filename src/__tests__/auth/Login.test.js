import React from 'react';
import { shallow } from 'enzyme';
import Login from '../../components/auth/Login';

test('render the Login component', () => {
  const wrapper = shallow(<Login />);
  expect(wrapper.exists()).toBe(true);
});
