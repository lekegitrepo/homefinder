import React from 'react';
import { shallow } from 'enzyme';
import FullBgImage from '../components/FullBgImage.component';

test('render the FullBgImage component', () => {
  const wrapper = shallow(<FullBgImage />);
  const text = wrapper.find('h6').text();
  expect(text).toEqual('Be everywhere at home');
});
