import React from 'react';

export default () => (
  <footer className="footer" style={styles.footer}>
    <div className="container">
      <div className="columns">
        <div className="column is-half">
          <div className="title is-3" style={styles.footerTitle}>Contact</div>
          <div>
            <p>349 5th Avenue</p>
            <p>New York, NY 10016</p>
            <p>United States</p>
          </div>
        </div>
        <div className="column auto">
          <div className="title is-3" style={styles.footerTitle}>Social Media</div>
          <div className="columns">
            <div className="column">
              <div>
                <a style={styles.socialLink} href="https://www.twitter.com/pabloalonsos">
                  <span className="icon">
                    <i className="fa fa-twitter"></i>
                  </span>
                  <span>Twitter</span>
                </a>
              </div>
              <div>
                <a style={styles.socialLink}>
                  <span className="icon">
                    <i className="fa fa-slack"></i>
                  </span>
                  <span>Slack</span>
                </a>
              </div>
            </div>
            <div className="column">
              <div>
                <a style={styles.socialLink} href="https://www.github.com/pabloalonsos">
                  <span className="icon">
                    <i className="fa fa-github"></i>
                  </span>
                  <span>Github</span>
                </a>
              </div>
              <div>
                <a style={styles.socialLink} href="https://www.medium.com/neosavvy-labs">
                  <span className="icon">
                    <i className="fa fa-medium"></i>
                  </span>
                  <span>Medium</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);


const styles = {
  footer: {
    bottom: '0',
    left: '0',
    position: 'fixed',
    height: '230px',
    backgroundColor: '#4A5C69',
    zIndex: '-1',
    width: '100%',
    color: '#EEF2F5'
  },
  footerTitle: {
    color: '#EEF2F5'
  },
  socialLink: {
    color: '#EEF2F5'
  }
};
