import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  row: {
    backgroundColor: '#f5f5f5ab',
  },
  headerRow: {
    backgroundColor: '#deb5b545',
  },
  th: {
    borderBottom: '1px solid #ddd',
    textAlign: 'left',
    padding: '4px 8px',
  },
  thFullWidth: {
    textAlign: 'center',
  },
  td: {
    borderBottom: '1px solid #ddd',
    padding: '4px 8px',
  },
});

function CourseListRow({ isHeader = false, textFirstCell, textSecondCell = null }) {
  let content;

  if (isHeader) {
    content = textSecondCell === null ? (
      <th colSpan="2" className={css(styles.th, styles.thFullWidth)}>{textFirstCell}</th>
    ) : (
      <React.Fragment>
        <th className={css(styles.th)}>{textFirstCell}</th>
        <th className={css(styles.th)}>{textSecondCell}</th>
      </React.Fragment>
    );
  } else {
    content = (
      <React.Fragment>
        <td className={css(styles.td)}>{textFirstCell}</td>
        <td className={css(styles.td)}>{textSecondCell}</td>
      </React.Fragment>
    );
  }

  return (
    <tr className={css(isHeader ? styles.headerRow : styles.row)}>
      {content}
    </tr>
  );
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
