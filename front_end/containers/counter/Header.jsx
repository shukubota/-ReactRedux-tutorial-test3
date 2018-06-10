import React from 'react';

const Header = (props) => {
  console.log(props)
  return (
    <div>
      count number: { props.count }
    </div>
  );
};

export default Header;
