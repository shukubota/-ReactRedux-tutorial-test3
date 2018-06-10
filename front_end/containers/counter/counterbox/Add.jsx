import React, { Component } from 'react';

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const count = this.props.count;
    const countHistory = this.props.countHistory;
    return (
      <div className="count_box">
        ADD
        <button type="button" onClick={() => {this.props.addCount(count, countHistory)}}>
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
