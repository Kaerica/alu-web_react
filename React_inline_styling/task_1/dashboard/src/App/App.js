import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  body: {
    margin: 0,
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  footer: {
    marginTop: 'auto',
    textAlign: 'center',
    padding: '10px 0',
    backgroundColor: '#f5f5f5',
  },
});

function App({ children }) {
  return (
    <div className={css(styles.body)}>
      {children}
      <footer className={css(styles.footer)}>Copyright</footer>
    </div>
  );
}

export default App;
