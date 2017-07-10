import React from 'react';

import Footer from '../components/Footer';

export default ({ children }) => (
  <div style={styles.mainBody}>
    <div style={styles.mainContent}>
      {children}
    </div>
    <Footer />
  </div>
);

const styles = {
  mainBody: {
    height: '100%'
  },
  mainContent: {
    marginBottom: '230px',
    boxShadow: '0 0 30px 0 rgba(54,69,79,.86)',
    color: '#70808D',
    backgroundColor: '#EEF2F5',
    minHeight: '50.05em',
    zIndex: 2
  }
};
