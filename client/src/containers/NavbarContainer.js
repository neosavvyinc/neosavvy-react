import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import { signOut } from '../actions';
import Navbar from '../components/Navbar';

const mapStateToProps = (state) => ({
  authenticated: state.auth.authenticated
});

const mapDispatchToProps = (dispatch) => ({
  onLogout() {
    dispatch(signOut());
    browserHistory.push('/');
  },
  onNavigate(route) {
    browserHistory.push(route);
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
