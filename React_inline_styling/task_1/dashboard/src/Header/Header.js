import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 20px',
    backgroundColor: '#fff',
    borderBottom: '1px solid #ddd',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: '32px',
  },
});

function Header({ children }) {
  return (
    <header className={css(styles.header)}>
      <div className={css(styles.logo)}>School Dashboard</div>
      {children}
    </header>
  );
}

export default Header;
