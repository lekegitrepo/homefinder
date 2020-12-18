import React from 'react';
import { shallow } from 'enzyme';
import App from '../containers/App';

//jest.mock('../containers/App')

test('renders learn react link', () => {
  const wrapper = shallow(<App />);
  const text = wrapper.find('p').text();
  expect(text).toContain('Edit');
});
