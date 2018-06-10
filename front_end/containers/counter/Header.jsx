import React from 'react';

const Header = (props) => {
  const userName = localStorage.getItem('user_name');
  return (
    <div>
      <p>count number: { props.count }</p>
      <p>ユーザーネーム: { userName }</p>
    </div>
  );
};

export default Header;
