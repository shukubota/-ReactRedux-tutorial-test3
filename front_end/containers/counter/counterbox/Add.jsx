import React from 'react';

const Add = (props) => {
  const { count, countHistory } = props;
  return (
    <div className="count_box">
      ADD
      <button
        type="button"
        onClick={() => {
          props.countUp(count, countHistory);
        }}
      >
        足すにゃ！
      </button>
      <button
        type="button"
        onClick={() => {
          props.toggleButton(true);
        }}
      >
        引き算ボタンを出現させるにゃー
      </button>
    </div>
  );
};

export default Add;
