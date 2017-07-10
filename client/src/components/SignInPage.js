import React from 'react';

import SignInFormContainer from '../containers/SignInFormContainer';

export default () => (
  <div className="container" style={styles.form}>
    <h1 className="title is-h1">Sign in</h1>
    <SignInFormContainer />
  </div>
);

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    maxWidth: '35rem',
  }
};
