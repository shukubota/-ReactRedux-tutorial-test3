import React, { Component } from 'react';

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { count, countHistory } = this.props;
    console.log(this.props);
    return (
      <div className="count_box">
        ADD
        <button
          type="button"
          onClick={() => {
            this.props.countUp(count, countHistory);
          }}
        >
          足すにゃ！
        </button>
        <button type="button" onClick={() => {this.props.toggleButton(false)}}>
          引き算ボタンを出現させるにゃー
        </button>
      </div>
    )
  }
}

export default Add
