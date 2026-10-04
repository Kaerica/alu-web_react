import React from 'react';
import PropTypes from 'prop-types';

const rowStyle = {
  backgroundColor: '#f5f5f5ab',
};

const headerRowStyle = {
  backgroundColor: '#deb5b545',
};

function CourseListRow({ isHeader = false, textFirstCell, textSecondCell = null }) {
  let content;

  if (isHeader) {
    content = textSecondCell === null ? (
      <th colSpan="2">{textFirstCell}</th>
    ) : (
      <React.Fragment>
        <th>{textFirstCell}</th>
        <th>{textSecondCell}</th>
      </React.Fragment>
    );
  } else {
    content = (
      <React.Fragment>
        <td>{textFirstCell}</td>
        <td>{textSecondCell}</td>
      </React.Fragment>
    );
  }

  return <tr style={isHeader ? headerRowStyle : rowStyle}>{content}</tr>;
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;
