import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import BodySection from './BodySection';

const styles = StyleSheet.create({
  margin: {
    marginBottom: '40px',
  },
});

class BodySectionWithMarginBottom extends Component {
  render() {
    return (
      <div className={css(styles.margin)}>
        <BodySection {...this.props} />
      </div>
    );
  }
}

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

BodySectionWithMarginBottom.defaultProps = {
  children: null,
};

export default BodySectionWithMarginBottom;
