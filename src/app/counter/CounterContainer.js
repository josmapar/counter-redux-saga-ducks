import React, { Component } from 'react';

import CounterComponent from './CounterComponent';

class CounterContainer extends Component {
  constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  handleIncrement() {
    
  }

  handleDecrement() {

  }

  render() {
    const { counter } = this.props;
    return (
      <div>
        <h1>Counter Redux</h1>
        <CounterComponent  
          counter={counter}
          onHandleIncrement={this.handleIncrement}
          onHandleDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}

CounterContainer.propTypes = {
  counter: PropTypes.number
};

export default CounterContainer;
