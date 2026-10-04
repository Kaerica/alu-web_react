import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';
import { getLatestNotification } from '../utils/utils';

const listNotifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
];

describe('<Notifications />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBe(true);
  });

  it('displays the menu item when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.text()).toContain('Your notifications');
    expect(wrapper.find('ul')).toHaveLength(0);
  });

  it('displays the menu item and the drawer when displayDrawer is true', () => {
    const wrapper = shallow(
      <Notifications displayDrawer={true} listNotifications={listNotifications} />
    );
    expect(wrapper.text()).toContain('Your notifications');
    expect(wrapper.find('ul')).toHaveLength(1);
    expect(wrapper.find(NotificationItem)).toHaveLength(3);
    expect(wrapper.text()).toContain('Here is the list of notifications');
  });

  it('renders the first NotificationItem with the right props', () => {
    const wrapper = shallow(
      <Notifications displayDrawer={true} listNotifications={listNotifications} />
    );
    const first = wrapper.find(NotificationItem).first();
    expect(first.props().type).toBe('default');
    expect(first.props().value).toBe('New course available');
  });

  it('renders "No new notification for now" with an empty list', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
    expect(wrapper.text()).toContain('No new notification for now');
    expect(wrapper.find(NotificationItem)).toHaveLength(0);
  });

  it('logs when markAsRead is called', () => {
    const spy = jest.spyOn(console, 'log').mockImplementation(() => {});
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    wrapper.instance().markAsRead(1);
    expect(spy).toHaveBeenCalledWith('Notification 1 has been marked as read');
    spy.mockRestore();
  });

  it('does not rerender with the same list', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    expect(wrapper.instance().shouldComponentUpdate({ displayDrawer: true, listNotifications })).toBe(false);
  });

  it('rerenders with a longer list', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    const longer = [...listNotifications, { id: 4, type: 'default', value: 'Another one' }];
    expect(wrapper.instance().shouldComponentUpdate({ displayDrawer: true, listNotifications: longer })).toBe(true);
  });
});
