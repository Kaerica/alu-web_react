import React from 'react';
import { StyleSheetTestUtils } from 'aphrodite';
import { shallow } from 'enzyme';
import Header from './Header';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('<Header />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders an img and a h1', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('img')).toHaveLength(1);
    expect(wrapper.find('h1')).toHaveLength(1);
    expect(wrapper.find('h1').text()).toBe('School dashboard');
  });
});
