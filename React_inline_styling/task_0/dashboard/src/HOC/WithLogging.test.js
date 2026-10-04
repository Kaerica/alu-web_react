import React from 'react';
import { mount } from 'enzyme';
import WithLogging from './WithLogging';
import Login from '../Login/Login';

describe('WithLogging HOC', () => {
  it('logs mount and unmount for a pure html element', () => {
    const spy = jest.spyOn(console, 'log').mockImplementation(() => {});
    const Wrapped = WithLogging(() => <p />);
    const wrapper = mount(<Wrapped />);
    expect(spy).toHaveBeenCalledWith('Component Component is mounted');
    wrapper.unmount();
    expect(spy).toHaveBeenCalledWith('Component Component is going to unmount');
    spy.mockRestore();
  });

  it('logs the component name for Login', () => {
    const spy = jest.spyOn(console, 'log').mockImplementation(() => {});
    const Wrapped = WithLogging(Login);
    const wrapper = mount(<Wrapped />);
    expect(spy).toHaveBeenCalledWith('Component Login is mounted');
    wrapper.unmount();
    expect(spy).toHaveBeenCalledWith('Component Login is going to unmount');
    spy.mockRestore();
  });
});
