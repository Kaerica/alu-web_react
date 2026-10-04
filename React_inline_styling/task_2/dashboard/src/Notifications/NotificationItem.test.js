import React from 'react';
import { StyleSheetTestUtils } from 'aphrodite';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('<NotificationItem />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders the correct type and value', () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    const li = wrapper.find('li');
    expect(li.prop('data-notification-type')).toBe('default');
    expect(li.text()).toBe('test');
  });

  it('renders the correct html', () => {
    const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }} />);
    expect(wrapper.find('li').html()).toContain('<u>test</u>');
  });

  it('applies the default style for a default notification', () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    const className = wrapper.find('li').prop('className');
    expect(className).toMatch(/^default_/);
    expect(className).not.toMatch(/urgent/);
  });

  it('applies the urgent style for an urgent notification', () => {
    const wrapper = shallow(<NotificationItem type="urgent" value="test" />);
    const className = wrapper.find('li').prop('className');
    expect(className).toMatch(/^urgent_/);
    expect(className).not.toMatch(/default/);
  });

  it('applies the urgent style for an urgent html notification', () => {
    const wrapper = shallow(<NotificationItem type="urgent" html={{ __html: '<u>test</u>' }} />);
    expect(wrapper.find('li').prop('className')).toMatch(/^urgent_/);
  });

  it('calls markAsRead with the right id when clicked', () => {
    const markAsRead = jest.fn();
    const wrapper = shallow(
      <NotificationItem type="default" value="test" id={42} markAsRead={markAsRead} />
    );
    wrapper.find('li').simulate('click');
    expect(markAsRead).toHaveBeenCalledWith(42);
  });
});
