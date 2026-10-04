import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  input: {
    margin: '0 16px 0 8px',
  },
});

function Login() {
  return (
    <div>
      <p>Login to access the full dashboard</p>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" className={css(styles.input)} />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" className={css(styles.input)} />
      <button type="button">OK</button>
    </div>
  );
}

export default Login;
