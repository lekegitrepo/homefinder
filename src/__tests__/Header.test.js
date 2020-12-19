import React from 'react';
import { shallow } from 'enzyme';
import Header from '../components/Header.component'

test('render the header contents', () => {
  const wrapper = shallow(<Header />);
  const text = wrapper.find('h3').text()
  expect(text).toEqual('Find Housing anywhere');
})
