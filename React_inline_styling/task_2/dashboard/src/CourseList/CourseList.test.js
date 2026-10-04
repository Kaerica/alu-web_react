import React from 'react';
import { StyleSheetTestUtils } from 'aphrodite';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';

const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 },
];

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('<CourseList />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders the header rows and the course rows', () => {
    const wrapper = shallow(<CourseList listCourses={listCourses} />);
    expect(wrapper.find('thead').find(CourseListRow)).toHaveLength(2);
    expect(wrapper.find('tbody').find(CourseListRow)).toHaveLength(3);
  });

  it('renders correctly with an empty list', () => {
    const wrapper = shallow(<CourseList listCourses={[]} />);
    const rows = wrapper.find('tbody').find(CourseListRow);
    expect(rows).toHaveLength(1);
    expect(rows.props().textFirstCell).toBe('No course available yet');
  });

  it('renders correctly without the listCourses prop', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find('tbody').find(CourseListRow).props().textFirstCell)
      .toBe('No course available yet');
  });
});
