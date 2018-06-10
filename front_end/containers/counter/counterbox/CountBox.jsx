import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Add from './Add';


export default class CountBox extends Component {
  render() {
    const props = Object.assign(
      {},
      { ...this.props },
      { ...this.state },
    );
    return (
      <div>
        <Add {...props} />
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
