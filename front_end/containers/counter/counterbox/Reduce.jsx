import React from 'react';

const Reduce = (props) => {
  const { count, countHistory } = props;
  return (
    <div className="count_box">
      Reduce
      <button
        type="button"
        onClick={() => {
          props.countDown(count, countHistory);
        }}
      >
        引くにゃ！
      </button>
      <button
        type="button"
        onClick={() => {
          props.toggleButton(false);
        }}
      >
        たし算ボタンを出現させるにゃー
      </button>
    </div>
  );
};

export default Reduce;
