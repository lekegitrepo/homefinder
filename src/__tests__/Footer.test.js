import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../components/Footer.component'

test('render the places component', () => {
  const wrapper = shallow(<Footer />);
  const text = wrapper.find('p.copyright').text()
  expect(text).toEqual('HomeFinder 2020. All right reserved');
})
