import React from 'react';
import { StyleSheetTestUtils } from 'aphrodite';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

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

    it('applies the header row style to the tr', () => {
      const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test" />);
      const className = wrapper.find('tr').prop('className');
      expect(className).toMatch(/headerRow/);
      expect(className).not.toMatch(/^row_/);
    });

    it('applies the full width style to a colspan th', () => {
      const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test" />);
      expect(wrapper.find('th').prop('className')).toMatch(/thFullWidth/);
    });

    it('applies the default th style when there are two cells', () => {
      const wrapper = shallow(
        <CourseListRow isHeader={true} textFirstCell="test" textSecondCell="second" />
      );
      wrapper.find('th').forEach((th) => {
        expect(th.prop('className')).toMatch(/^th_/);
        expect(th.prop('className')).not.toMatch(/thFullWidth/);
      });
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

    it('applies the default row style to the tr', () => {
      const wrapper = shallow(<CourseListRow textFirstCell="test" textSecondCell={10} />);
      const className = wrapper.find('tr').prop('className');
      expect(className).toMatch(/^row_/);
      expect(className).not.toMatch(/headerRow/);
    });

    it('applies the td style to each cell', () => {
      const wrapper = shallow(<CourseListRow textFirstCell="test" textSecondCell={10} />);
      wrapper.find('td').forEach((td) => {
        expect(td.prop('className')).toMatch(/^td_/);
      });
    });
  });
});
