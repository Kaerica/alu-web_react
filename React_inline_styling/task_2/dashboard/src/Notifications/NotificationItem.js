import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  default: {
    color: 'blue',
  },
  urgent: {
    color: 'red',
  },
});

class NotificationItem extends PureComponent {
  render() {
    const { type, value, html, markAsRead, id } = this.props;
    const itemStyle = type === 'urgent' ? styles.urgent : styles.default;

    return (
      <li
        data-notification-type={type}
        className={css(itemStyle)}
        onClick={() => markAsRead(id)}
        dangerouslySetInnerHTML={html || undefined}
      >
        {html ? undefined : value}
      </li>
    );
  }
}

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  markAsRead: PropTypes.func,
  id: PropTypes.number,
};

NotificationItem.defaultProps = {
  type: 'default',
  value: '',
  html: null,
  markAsRead: () => {},
  id: 0,
};

export default NotificationItem;
