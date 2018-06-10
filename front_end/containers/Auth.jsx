import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import {
  onSetUser,
  onAddCount,
  onReduceCount,
  onChangeButton
} from '../modules/ActionCreater'

import Header from './counter/Header'
import Countbox from './counter/counterbox/CountBox'
import Historybox from './counter/History'

import Signin from './Signin'
import Style from './App.css'

class Auth extends Component {
  constructor(props){
    super(props)
    this.state={
      user: {
          name: '',
          email: '',
          password: ''
        }
    }
  }
  componentWillMount(){
    const user = JSON.parse(localStorage.getItem('count_user'))
    this.setState({ user })
    if (!localStorage.getItem('isAuthenticated')) {
    this.props.history.push("/signin")
    }
  }

  handleLoout(){
    this.setState({
      user: {
          name: '',
          email: '',
          password: ''
        },
        isAuthenticated: false
      })
    localStorage.clear()
    window.location = '/signin'
  }

  render(){
    const props = Object.assign(
      {},
      {...this.props},
      {...this.state},
      {handleLoout: this.handleLoout.bind(this)},
    )
    return (
      <div>
        <Switch>
          <Route exact path="/" render={() => (<Countbox {...props}/>)} />
          <Route exact path="/signin" render={() => (<Signin {...this.props}/>)} />
          <Route exact path="/count" render={() => (<Countbox {...props}/>)} />
          <Route path="/history" render={() => (<Historybox {...props}/>)} />
        </Switch>
       </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    count: state.counter.count,
    isAdd: state.counter.isAdd,
    countHistory: state.counter.countHistory
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCount(count, countHistory) {
      dispatch(onAddCount(count, countHistory))
    },
    reduceCount(count, countHistory) {
      dispatch(onReduceCount(count, countHistory))
    },
    changeButton(isAdd) {
      dispatch(onChangeButton(isAdd))
    },
    setUser(user) {
      dispatch(onSetUser(user))
    }

  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Auth))
