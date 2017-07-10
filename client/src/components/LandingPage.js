import React from 'react';
import NavbarSignOut from '../containers/NavbarSignOut';

export default () => (
  <div>
    <div style={styles.jumbo.container}>
      <NavbarSignOut />
      <div style={styles.jumbo.content}>
        <h1 className="title is-1" style={styles.jumbo.text}>NEOSAVVY</h1>
        <p style={{...styles.jumbo.text, ...styles.jumbo.subtitle}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rutrum urna felis, dictum dictum erat condimentum sit amet. Cras vel est bibendum, Cras vel est bibendum, posuere orci quis, consequat nisl.
        </p>
        <button className="button is-primary" style={styles.jumbo.button}>LEARN MORE</button>
        <div style={styles.jumbo.image}></div>
      </div>
    </div>
    <div className="container" style={styles.body}>
      <p>This is the landing page.</p>
    </div>
  </div>
);


const styles = {
  jumbo: {
    container: {
      backgroundColor: '#F7F9FA',
      height: '36rem',
      boxShadow: '0 5px 8px 0 rgba(72,89,102,.06)',
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: '#363636'
    },
    subtitle: {
      maxWidth: '35rem',
      textAlign: 'center',
      marginBottom: '1.5rem'
    },
    button: {
      marginBottom: '1.5rem'
    },
    image: {
      width: '35rem',
      height: '16.9rem',
      backgroundColor: '#D8E5F0'
    }
  },
  body: {
    paddingTop: '20px',
    height: '500px'
  }
}
