import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';

describe('<BodySectionWithMarginBottom />', () => {
  it('renders a BodySection with the right props', () => {
    const wrapper = shallow(
      <BodySectionWithMarginBottom title="test title">
        <p>test children node</p>
      </BodySectionWithMarginBottom>
    );
    const section = wrapper.find(BodySection);
    expect(section).toHaveLength(1);
    expect(section.props().title).toBe('test title');

    const inner = section.dive();
    expect(inner.find('h2').text()).toBe('test title');
    expect(inner.find('p').text()).toBe('test children node');
  });
});
