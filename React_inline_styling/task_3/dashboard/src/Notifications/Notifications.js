import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import closeIcon from '../assets/close-icon.png';

const closeButtonStyle = {
  float: 'right',
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
};

const closeIconStyle = {
  width: '10px',
  height: '10px',
};

const screenSmall = '@media (max-width: 900px)';

const styles = StyleSheet.create({
  menuItem: {
    textAlign: 'right',
  },
  notifications: {
    float: 'right',
    width: '40%',
    border: '2px dashed #e0354b',
    padding: '6px 12px',
    margin: '0 8px 8px 0',
    [screenSmall]: {
      float: 'none',
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100vh',
      overflowY: 'auto',
      boxSizing: 'border-box',
      margin: 0,
      padding: 0,
      border: 'none',
      backgroundColor: 'white',
      fontSize: '20px',
      zIndex: 10,
    },
  },
  list: {
    [screenSmall]: {
      padding: 0,
    },
  },
});

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.listNotifications.length > this.props.listNotifications.length
      || nextProps.displayDrawer !== this.props.displayDrawer
    );
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;

    return (
      <React.Fragment>
        <div className={css(styles.menuItem)}>
          <p>Your notifications</p>
        </div>
        {displayDrawer && (
          <div className={css(styles.notifications)}>
            <button
              type="button"
              style={closeButtonStyle}
              aria-label="Close"
              onClick={() => console.log('Close button has been clicked')}
            >
              <img src={closeIcon} alt="close icon" style={closeIconStyle} />
            </button>
            {listNotifications.length === 0 ? (
              <p>No new notification for now</p>
            ) : (
              <React.Fragment>
                <p>Here is the list of notifications</p>
                <ul className={css(styles.list)}>
                  {listNotifications.map((notification) => (
                    <NotificationItem
                      key={notification.id}
                      id={notification.id}
                      type={notification.type}
                      value={notification.value}
                      html={notification.html}
                      markAsRead={this.markAsRead}
                    />
                  ))}
                </ul>
              </React.Fragment>
            )}
          </div>
        )}
      </React.Fragment>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;
