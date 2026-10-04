import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const screenSmall = '@media (max-width: 900px)';

const styles = StyleSheet.create({
  inputGroup: {
    display: 'inline-block',
    [screenSmall]: {
      display: 'block',
      marginBottom: '8px',
    },
  },
  input: {
    margin: '0 16px 0 8px',
  },
  button: {
    [screenSmall]: {
      display: 'block',
    },
  },
});

function Login() {
  return (
    <div>
      <p>Login to access the full dashboard</p>
      <div className={css(styles.inputGroup)}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" className={css(styles.input)} />
      </div>
      <div className={css(styles.inputGroup)}>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" className={css(styles.input)} />
      </div>
      <button type="button" className={css(styles.button)}>OK</button>
    </div>
  );
}

export default Login;
