import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { asyncSignIn, addCount } from '../actions/index';

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
    count: state.handleCount.count,
    countHistory: state.handleCount.countHistory,
  }
);

const mapDispatchToProps = dispatch => ({
  fetchUser(user) {
    dispatch(asyncSignIn(user));
  },
  countUp(count, countHistory) {
    dispatch(addCount(count, countHistory));
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Auth));
