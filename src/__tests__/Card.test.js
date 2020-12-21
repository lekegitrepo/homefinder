import React from 'react';
import { shallow } from 'enzyme';
import Card from '../components/Card.component';

test('render the Card component', () => {
  const wrapper = shallow(<Card />);
  expect(wrapper.exists()).toBe(true);
});
