import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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

// const mapStateToProps = ({ counter }) => ({
//   counter
// });

const mapStateToProps = ({ counter }) => ({
   counter: counter.counter //modulo.estado
});

export default connect(mapStateToProps)(CounterContainer);
