import React from 'react';

import SignUpFormContainer from '../containers/SignUpFormContainer';

export default () => (
  <div className="container" style={styles.form}>
    <h1 className="title is-h1">Sign up</h1>
    <SignUpFormContainer />
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
