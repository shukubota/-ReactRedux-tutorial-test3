import React from 'react';
import { Link } from 'react-router-dom';

const History = (props) => {
  const { countHistory } = props;
  const historyMap = countHistory.map(history => <div>{history}</div>);

  console.log(props);
  return (
    <div>
      <h2>検索結果一覧</h2>
      <Link to='/'>
        topへ
      </Link>
      { historyMap }
    </div>
  );
};

export default History;
