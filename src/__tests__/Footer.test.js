import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../components/Footer.component';

test('render the footer component', () => {
  const wrapper = shallow(<Footer />);
  const text = wrapper.find('p.footer__copyright').text();
  expect(text).toEqual('HomeFinder 2020. All right reserved');
});
