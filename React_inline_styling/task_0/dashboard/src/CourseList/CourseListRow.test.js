import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('<CourseListRow />', () => {
  describe('when isHeader is true', () => {
    it('renders one cell with colspan = 2 when textSecondCell does not exist', () => {
      const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test" />);
      const th = wrapper.find('th');
      expect(th).toHaveLength(1);
      expect(th.prop('colSpan')).toBe('2');
      expect(th.text()).toBe('test');
    });

    it('renders two cells when textSecondCell is present', () => {
      const wrapper = shallow(
        <CourseListRow isHeader={true} textFirstCell="test" textSecondCell="second" />
      );
      expect(wrapper.find('th')).toHaveLength(2);
      expect(wrapper.find('th').at(0).text()).toBe('test');
      expect(wrapper.find('th').at(1).text()).toBe('second');
    });

    it('applies the header row background color', () => {
      const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test" />);
      expect(wrapper.find('tr').prop('style')).toEqual({ backgroundColor: '#deb5b545' });
    });
  });

  describe('when isHeader is false', () => {
    it('renders correctly two td elements within a tr element', () => {
      const wrapper = shallow(
        <CourseListRow isHeader={false} textFirstCell="test" textSecondCell="second" />
      );
      expect(wrapper.find('tr')).toHaveLength(1);
      expect(wrapper.find('tr').children('td')).toHaveLength(2);
    });

    it('applies the default row background color', () => {
      const wrapper = shallow(<CourseListRow textFirstCell="test" textSecondCell={10} />);
      expect(wrapper.find('tr').prop('style')).toEqual({ backgroundColor: '#f5f5f5ab' });
    });
  });
});
