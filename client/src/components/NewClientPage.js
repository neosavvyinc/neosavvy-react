import React from 'react';

import NewClientContainer from '../containers/NewClientContainer';

export default () => (
  <div className="container" style={{...styles.container, ...styles.form}}>
    <h1 className="title is-h1">New Client</h1>
    <NewClientContainer />
  </div>
);

const styles = {
  container: {
    marginTop: '20px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    maxWidth: '35rem',
  }
};
