/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import Display from './display';
import ButtonPanel from './buttonPanel';
import calculate from '../logic/calculate';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick=buttonName => {
    this.setState(state => calculate(state, buttonName));
  }

  render() {
    return (
      <div className="app">
        <>
          <Display result={this.state.next ? this.state.next : this.state.total} />
          <ButtonPanel clickHandler={this.handleClick} />
        </>
      </div>

    );
  }
}
