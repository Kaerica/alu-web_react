import React from 'react';
import { StyleSheetTestUtils } from 'aphrodite';
import { shallow, mount } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('<App />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  it('contains the Notifications component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Notifications)).toHaveLength(1);
  });

  it('contains the Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header)).toHaveLength(1);
  });

  it('contains the Login component when not logged in', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Login)).toHaveLength(1);
  });

  it('contains the Footer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Footer)).toHaveLength(1);
  });

  it('does not render CourseList when not logged in', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(CourseList)).toHaveLength(0);
  });

  describe('when isLoggedIn is true', () => {
    it('does not render Login', () => {
      const wrapper = shallow(<App isLoggedIn={true} />);
      expect(wrapper.find(Login)).toHaveLength(0);
    });

    it('renders CourseList', () => {
      const wrapper = shallow(<App isLoggedIn={true} />);
      expect(wrapper.find(CourseList)).toHaveLength(1);
    });
  });

  it('calls logOut and alert when ctrl+h is pressed', () => {
    const logOut = jest.fn();
    const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
    const wrapper = mount(<App logOut={logOut} />);

    document.dispatchEvent(new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' }));

    expect(alertSpy).toHaveBeenCalledWith('Logging you out');
    expect(logOut).toHaveBeenCalled();

    alertSpy.mockRestore();
    wrapper.unmount();
  });
});
