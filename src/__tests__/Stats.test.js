import React from 'react';
import { shallow } from 'enzyme';
import Stats from '../components/Stats.component';

test('render the stats component', () => {
  const wrapper = shallow(<Stats />);
  const text = wrapper.find('h3').text();
  expect(text).toEqual('Comfortable home from reliable people');
});
