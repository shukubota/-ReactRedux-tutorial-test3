import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Add from './Add';
import Reduce from './Reduce';
import Header from '../Header';

export default class CountBox extends Component {
  render() {
    console.log(this.props);
    const { count, countHistory, isAddButton } = this.props;
    const props = Object.assign(
      {},
      { ...this.props },
      { ...this.state },
    );
    return (
      <div>
        <Header {...props} />
        {
          isAddButton
            ? <Add {...props} />
            : <Reduce {...props} />
        }
        <Link to='/history'>
          検索履歴一覧
        </Link>
        <button
          type="button"
          onClick={() => {
            this.props.signOut();
          }}
        >
          ログアウト
        </button>
      </div>
    );
  }
}
