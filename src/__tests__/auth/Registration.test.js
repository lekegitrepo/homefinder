import React from 'react';
import { shallow } from 'enzyme';
import Registration from '../../components/auth/Registration';

test('render the Registration component', () => {
  const wrapper = shallow(<Registration />);
  expect(wrapper.exists()).toBe(true);
});
