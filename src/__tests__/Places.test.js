import React from 'react';
import { shallow } from 'enzyme';
import Places from '../components/Places.component'

test('render the places component', () => {
  const wrapper = shallow(<Places />);
  const text = wrapper.find('h4').text()
  expect(text).toEqual('Only best places for your rest');
})
