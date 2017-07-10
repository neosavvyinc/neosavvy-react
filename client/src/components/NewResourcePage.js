import React from 'react';

import NewResourceContainer from '../containers/NewResourceContainer';

export default () => (
  <div className="container" style={{...styles.container, ...styles.form}}>
    <h1 className="title is-h1">New Resource</h1>
    <NewResourceContainer />
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
