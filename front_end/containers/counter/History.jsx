import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const History = (props) => {
  const { countHistory } = props;
  const historyMap = countHistory.map(history => <div>{ history }</div>);
  return (
    <div>
      <Header {...props}/>
      <h2>検索結果一覧</h2>
      <Link to='/'>
        topへ
      </Link>
      { historyMap }
    </div>
  );
};

export default History;
