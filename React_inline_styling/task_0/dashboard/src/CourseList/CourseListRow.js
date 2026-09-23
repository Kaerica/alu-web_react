import React from 'react';

const rowStyle = {
  backgroundColor: '#f5f5f5ab',
};

const headerStyle = {
  backgroundColor: '#deb5b545',
};

function CourseListRow({ isHeader = false, children }) {
  return (
    <tr style={isHeader ? headerStyle : rowStyle}>
      {children}
    </tr>
  );
}

export default CourseListRow;
