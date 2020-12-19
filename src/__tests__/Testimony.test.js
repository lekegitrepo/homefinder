import React from 'react';
import { shallow } from 'enzyme';
import Testimony from '../components/Testimony.component'

test('render the Testimony component', () => {
  const wrapper = shallow(<Testimony />);
  const text = wrapper.find('h3').text()
  expect(text).toEqual('Look what these people have to say');
})
