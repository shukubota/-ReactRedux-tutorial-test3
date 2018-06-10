import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { asyncSignIn, addCount, reduceCount, toggleButton } from '../actions/index';

import Signin from './Signin';
import CountBox from './counter/counterbox/CountBox';
import History from './counter/History';

class Auth extends Component {
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
          <Route exact path="/history" render={() => (<History {...props} />)} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    count: state.handleCount.count,
    countHistory: state.handleCount.countHistory,
    isAddButton: state.toggleButton.isAddButton,
  }
);

const mapDispatchToProps = dispatch => ({
  fetchUser(user) {
    dispatch(asyncSignIn(user));
  },
  countUp(count, countHistory) {
    dispatch(addCount(count, countHistory));
  },
  countDown(count, countHistory) {
    dispatch(reduceCount(count, countHistory));
  },
  toggleButton(isAddButton) {
    dispatch(toggleButton(isAddButton));
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Auth));
