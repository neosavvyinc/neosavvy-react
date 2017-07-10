import React from 'react';
import { browserHistory } from 'react-router';

export default () => (
  <nav className="nav" style={styles.nav}>
    <div className="nav-left">
      <a
        className="nav-item"
        onClick={() => browserHistory.push("/")}
      >
        <h4 className="title is-4">Neosavvy</h4>
      </a>
    </div>

    <div className="nav-center">
      <a className="nav-item">
        <span className="icon">
          <i className="fa fa-github"></i>
        </span>
      </a>
      <a className="nav-item">
        <span className="icon">
          <i className="fa fa-medium"></i>
        </span>
      </a>
      <a className="nav-item">
        <span className="icon">
          <i className="fa fa-slack"></i>
        </span>
      </a>
      <a className="nav-item">
        <span className="icon">
          <i className="fa fa-twitter"></i>
        </span>
      </a>
    </div>

    <span className="nav-toggle">
      <span></span>
      <span></span>
      <span></span>
    </span>

    <div className="nav-right nav-menu">
      <a
        className="nav-item"
        style={styles.navLink}
        onClick={() => browserHistory.push("/signin")}
      >
        SIGN IN
      </a>
      <div className="nav-item">
        <div className="field is-grouped">
          <p className="control">
            <a
              className="button"
              style={styles.navButton}
              onClick={() => browserHistory.push("/signup")}
            >
              <span>SIGN UP</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  </nav>
);

const styles = {
  nav: {
    backgroundColor: 'transparent',
    marginBottom: '20px'
  },
  navLink: {
    fontSize: '0.9rem',
    fontWeight: '600'
  },
  navButton: {
    backgroundColor: 'transparent',
    border: "2px solid",
    fontSize: '0.9rem',
    fontWeight: '600'
  }
}
