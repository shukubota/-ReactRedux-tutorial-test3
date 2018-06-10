import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { asyncSignIn } from '../actions/index';

import Signin from './Signin';
import CountBox from './counter/counterbox/CountBox';

class Auth extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if (!localStorage.getItem('isAuthenticated')) {
      this.props.history.push('/signin');
    }
  }

  signOut() {
    localStorage.clear();
    window.location = ('/');
  }



  render() {
    const props = Object.assign(
      {},
      { ...this.props },
      { signOut: this.signOut.bind(this) },
    );
    return (
      <div>
        <Switch>
          <Route exact path="/signin" render={() => (<Signin {...props} />)} />
          <Route exact path="/" render={() => (<CountBox {...props} />)} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    current_user: state,
  }
);

const mapDispatchToProps = dispatch => ({
  setUser(user) {
    dispatch(asyncSignIn(user));
    // dispatch(fetchUser(user));
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Auth));
